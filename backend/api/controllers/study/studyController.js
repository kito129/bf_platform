let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise

const Study = require("../../models/study/study/study")
const StudyTrades = require("../../models/report/studyTrades")
const studyFunctions = require("../functions/studyFunctions");
const MarketFunction = require("../functions/marketFunctions");


// return all studies
exports.get_all_studies = (req, res, next) => {
    Study.find()
        .select("_id created lastUpdate study")
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        study: doc.study,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response.sort(function(a,b){
                    return a.study.created - b.study.created;
                }));
            } else {
                res.status(404).json({
                    message: 'No study found in DB'
                });
            }
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        });
};


// create study
exports.create_study = (req, res, next) => {
    let created;

    let basketId = req.body.study.element.baskets[0]
    let entryId = req.body.study.element.entry[0]
    let tradesGenerated = null

    studyFunctions.generateTrades(basketId,entryId, req.body.study.strategyId).then(trades => {
        tradesGenerated = trades

    }).then( () => {

        // generate StudyTrades object and save
        let trades = new StudyTrades({
            _id: new mongoose.Types.ObjectId(),
            trades: tradesGenerated
        });
        // save trades
        trades
            .save()
            .then(result => {
                let createdTrades =  {
                    _id: result._id,
                    trades: result.trades
                }
                // generate Study object and save with trades set
                req.body.study.element.trades = createdTrades._id
                let study = new Study({
                    _id: new mongoose.Types.ObjectId(),
                    created: req.body.created,
                    lastUpdate: req.body.lastUpdate,
                    study: req.body.study,
                });
                // save study
                study
                    .save()
                    .then(result => {
                        created =  {
                            _id: result._id,
                            created: result.created,
                            lastUpdate: result.lastUpdate,
                            study: result.study,
                        }
                        res.status(200).json(created);
                    })
                // catch study
                .catch(err => {
                    console.log("ERROR:\n" + err);
                    res.status(500).json(JSON.stringify({
                        error: err
                    }));
                })
        // catch trades
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json(JSON.stringify({
                error: err
            }));
        })
    })

};

// update study
exports.update_study_by_id = (req, res, next) => {
    const myId = req.params.studyId;
    let updated

    let basketId = req.body.study.element.baskets[0]
    let entryId = req.body.study.element.entry[0]

    let tradesGenerated = null

    studyFunctions.generateTrades(basketId,entryId,req.body.study.strategyId).then(trades => {
        tradesGenerated = trades

    }).then( () => {

        StudyTrades.findOneAndRemove({_id: req.body.study.element.trades})
            .select("_id")
            .exec()
            .then(docs => {
                // generate StudyTrades object and save
                let trades = new StudyTrades({
                    _id: new mongoose.Types.ObjectId(),
                    trades: tradesGenerated
                });
                // save trades
                trades
                    .save()
                    .then(result => {
                        let createdTrades =  {
                            _id: result._id,
                            trades: result.trades,
                        }
                        // generate Study object and save with trades set
                        req.body.study.element.trades = createdTrades._id
                        // save updated study
                        Study.findOneAndUpdate({_id: myId},req.body,  { new: true})
                            .select("_id created lastUpdate study")
                            .exec()
                            .then(doc => {
                                updated = {
                                    created: doc.created,
                                    lastUpdate: doc.lastUpdate,
                                    study: doc.study,
                                    _id: doc._id,
                                }
                                // then return the value to FE
                                res.status(200).json(updated);
                            })
                            .catch(err => {
                                console.log("ERROR STUDY:\n" + err);
                                res.status(500).json({
                                    error: err
                                });
                            })
                        // catch trades
                    })
                    .catch(err => {
                        console.log("ERROR TRADES:\n" + err);
                        res.status(500).json(JSON.stringify({
                            error: err
                        }));
                    })
            })
    })
};

// delete study by _id
exports.delete_study_by_id = (req, res, next) => {
    const myId = req.params.studyId;
    let removedStudy
    Study.findOneAndRemove({_id: myId})
        .exec()
        .then(docs => {
            removedStudy = {
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                study: docs.study,
                _id: docs._id,
            }
            StudyTrades.findOneAndRemove({_id: removedStudy.study.element.trades})
                .exec()
                .then(docs => {

                    // return delete study
                    res.status(200).json(removedStudy);
                })
                // catch trades delete
                .catch(err => {
                    console.log("ERROR:\n" + err);
                    res.status(500).json({
                        error: err
                    });
                })
        // catch study delete
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })
};

// get study market
exports.get_study_market_by_id = (req, res, next) => {
    const marketId = req.params.marketId;
    const selectionId = +req.params.selectionId;
    MarketFunction.getMarketDetailById(marketId,true, selectionId).then(
        function(value) {
            // here set the data for basket
            res.status(200).json(value)
        },
        function(error) {
            console.log(error)
            res.status(500).json(JSON.stringify({
                error: error
            }));
        }
    )
};



// get study trades by study id
exports.get_study_trades_by_study_id = (req, res, next) => {
    const myId = req.params.studyId;
    Study.findOne({_id: myId})
        .select("_id created lastUpdate study")
        .exec()
        .then(doc => {
            const study =
                {
                    created: doc.created,
                    lastUpdate: doc.lastUpdate,
                    study: doc.study,
                    _id: doc._id,
                };
            let tradesId = study.study.element.trades
            StudyTrades.findOne({_id: tradesId})
                .select("_id trades")
                .exec()
                .then(doc => {
                    const trades = doc.trades
                    res.status(200).json(trades);
                    // catch trades
                })
                .catch(err => {
                    console.log("ERROR TRADES:\n" + err);
                    res.status(500).json({
                        error: err
                    });
                });
            // catch study
        })
        .catch(err => {
            console.log("ERROR STUDY:\n" + err);
            res.status(500).json({
                error: err
            });
        });
};


// get studies trades by study id array
exports.get_studies_trades_by_study_id = (req, res, next) => {
    let studiesId = req.params.studyId.split(',');
    let study = []
    Study.find({
        '_id': {
            $in: studiesId
        }
    })
        .select("_id created lastUpdate study")
        .exec()
        .then(docs => {
            study = docs.map(doc => {
                return {
                    created: doc.created,
                    lastUpdate: doc.lastUpdate,
                    study: doc.study,
                    _id: doc._id,
                };
            });
            let tradesId = study.map( x => x.study.element.trades)
            StudyTrades.find({
                '_id': {
                    $in: tradesId
                }
            })
                .select("_id trades")
                .exec()
                .then(docs => {
                    let trades = docs.map(x=> x)
                    // create study compare, find the correct trade[] for correct study
                    let studyCompare = []
                    for(let _study of study){
                        let tradeId = _study.study.element.trades.toString()
                        studyCompare.push({
                            trades: trades.filter( x => {
                                return  tradeId.localeCompare(x._id) === 0 ;
                            })[0].trades,
                            study: _study
                        })
                    }
                    // re order based on requests the study
                    let response = []
                    for (let studyId of studiesId){
                        for (let _study of studyCompare){
                            let s = _study.study._id.toString()
                            if(s.localeCompare(studyId) === 0){
                                response.push(_study)
                                break
                            }
                        }
                    }
                    res.status(200).json(response);
                    // catch trades
                })
                .catch(err => {
                    console.log("ERROR TRADES:\n" + err);
                    res.status(500).json({
                        error: err
                    });
                });
            // catch study
        })
        .catch(err => {
            console.log("ERROR STUDY:\n" + err);
            res.status(500).json({
                error: err
            });
        });

}
