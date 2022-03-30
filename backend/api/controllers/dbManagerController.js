const Market = require("../models/marketBasic/marketInfoBasic");
const Runner = require("../models/runners");
const Selection = require("../models/marketBasic/marketRunnersBasic");

exports.db_manager_update_under_over = (req, res, next) => {
    let query = {marketType: { $regex: /^(UNDER|OVER|FIRST_HALF)/ }};
    let update = {sport: 'FOOTBALL'};

    Market.updateMany(query, update,(err, update) =>{
        if (err) {
            console.log(err);
            res.status(500).json(err)
        } else {
            console.log(update);
            res.status(200).json(update.nModified)
        }
    });
}

exports.db_manager_get_sport_stats = (req, res, next) => {

    let queryFootball = {sport:  'FOOTBALL'};
    let queryTennis= {sport:  'TENNIS'};
    let queryHorse = {sport:  'HORSE RACING'};
    let response = {

        countFootball: 0,
        countTennis: 0,
        countHorse: 0,
        total: 0,
        lastUpdate: Date.now()
    }
    Market.countDocuments(queryFootball, function(err, resp) {
        if (err) {
            console.log(err);
            res.status(500).json(err)
        } else {
            response.countFootball = resp

            Market.countDocuments(queryTennis, function(err, resp) {
                if (err) {
                    console.log(err);
                    res.status(500).json(err)
                } else {
                    response.countTennis = resp
                }
            });

            Market.countDocuments(queryHorse, function(err, resp) {
                if (err) {
                    console.log(err);
                    res.status(500).json(err)
                } else {
                    response.countHorse = resp
                    response.total = response.countFootball + response.countHorse + response.countTennis

                    console.log(response);
                    res.status(200).json(response);
                }
            });
        }
    });
}

exports.db_manager_update_runners_stats = (req, res, next) => {

    let allRunnerResp = []
    Runner.find()
        .select("_id id name")
        .exec()
        .then(docs => {
            allRunnerResp =
                docs.map(doc => {
                    return {
                        id: doc.id,
                        name: doc.name,
                        _id: doc._id,
                    };
                });
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })
        .then(()=> {

            for (let runner of allRunnerResp) {

                Market.countDocuments(queryHorse)
                    .exec()
                    .catch(err => {
                        console.log("ERROR:\n" + err);
                        res.status(500).json({
                            error: err
                        });
                    })



            }
        })



}


exports.db_manager_update_runners_sport = (req, res, next) => {
    let allRunnerResp = []
    Runner.find()
        .select("_id id name")
        .exec()
        .then(docs => {
            allRunnerResp =
                docs.map(doc => {
                    return {
                        id: doc.id,
                        name: doc.name,
                        _id: doc._id,
                    };
                });
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })
        .then(()=>{

            for(let runner of allRunnerResp){

                let selectionResp = ''
                Selection.findOne({ 'runners.id':runner.id })
                    .select("marketId")
                    .exec()
                    .then(docs => {
                        if(docs!=null){
                            selectionResp = docs
                        }
                    })
                    .catch(err => {
                        console.log("ERROR:\n" + err);
                        res.status(500).json({
                            error: err
                        });
                    })
                    .then(()=>{
                        let marketResponse = ''
                        Market.find({ 'id': selectionResp.marketId })
                            .select("sport")
                            .exec()
                            .then(docs => {
                                if (docs.length > 0) {
                                    marketResponse = docs[0]
                                }
                            })
                            .catch(err => {
                                console.log("ERROR:\n" + err);
                                res.status(500).json({
                                    error: err
                                });
                            })
                            .then(()=>{
                                Runner.findOneAndUpdate({id: runner.id},{ sport: marketResponse.sport })
                                    .select("_id runnerId created lastUpdate note")
                                    .exec()
                                    .then(docs => {

                                    })
                                    .catch(err => {
                                        console.log("ERROR:\n" + err);
                                        res.status(500).json({
                                            error: err
                                        });
                                    })


                            })
                    })

            }
            res.status(200).json()
        })



}

/*
const BasketNew = require("../models/study/basket/basket_refactor")
const Basket = require("../models/study/basket/basket")


let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise


let response = 0
exports.fix_basket_schema = (req, res, next) => {
    Basket.find()
        .select("_id created lastUpdate basket")
        .exec()
        .then(docs => {
            response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        basket: doc.basket,
                        _id: doc._id,
                    };
                });
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })
        .then( () => {
            let temp = {}
            for(let resp of response){
                temp = {
                    _id: resp._id,
                    created: resp.created,
                    lastUpdate: resp.lastUpdate,
                    basket: {
                        name: resp.basket.name,
                        description: resp.basket.description,
                        sport: resp.basket.sport,
                        activeFilter: resp.basket.activeFilter,
                        playersFilter: [],
                        options: resp.basket.options,
                        size: resp.basket.size,
                        relativeMarkets: resp.basket.relativeMarkets,
                    }
                }
                let basket = new BasketNew({
                    _id: temp._id,
                    created: temp.created,
                    lastUpdate: temp.lastUpdate,
                    basket: temp.basket,
                });
                basket
                    .save()
                    .then(result => {
                        console.log(result)
                    })
            }
            res.status(200).json({
                message: 'ok'
            });
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })


}



/*

const RunnerNotes = require("../models/runners/runnerNote")

const Notes = require("../models/notes")

let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise


exports.fix_notes_schema = (req, res, next) => {
    let response
    RunnerNotes.find()
        .select("_id created lastUpdate note")
        .exec()
        .then(docs => {
            response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        note: doc.note,
                        _id: doc._id,
                    };
                });
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })
        .then( () => {
            let temp = {}
            for(let resp of response){
                temp = {
                    created: resp.created,
                    lastUpdate: resp.lastUpdate,
                    note: {
                        description: resp.note.description,
                        type: resp.note.type,
                        tournament: resp.note.tournament,
                        tournamentId: resp.note.tournamentId,
                        phase: resp.note.phase,
                        selection: {
                            runnerA: {
                                name: resp.note.selection.runnerA.name,
                                id: resp.note.selection.runnerA.id,
                                bsp: resp.note.selection.runnerA.bsp,
                                odds: resp.note.selection.runnerA.odds,
                            },
                            runnerB: {
                                name: resp.note.selection.runnerB.name,
                                id: resp.note.selection.runnerB.id,
                                bsp: resp.note.selection.runnerB.bsp,
                                odds: resp.note.selection.runnerB.odds,
                            },
                            injuredId: resp.note.selection.injuredId,
                        },
                        detailType: {
                            isInPlay: resp.note.tennisPoints.isInPlay,
                            recall: resp.note.tennisPoints.recall,
                            isNotInPause: resp.note.tennisPoints.isNotInPause,
                        },
                        tennisPoints: {
                            set1: {
                                runnerA: resp.note.tennisPoints.set1.runnerA,
                                runnerB: resp.note.tennisPoints.set1.runnerB,
                            },
                            set2: {
                                runnerA: resp.note.tennisPoints.set2.runnerA,
                                runnerB: resp.note.tennisPoints.set2.runnerB,
                            },
                            set3: {
                                runnerA: resp.note.tennisPoints.set3.runnerA,
                                runnerB: resp.note.tennisPoints.set3.runnerB,
                            },
                            set4: {
                                runnerA: resp.note.tennisPoints.set4.runnerA,
                                runnerB: resp.note.tennisPoints.set4.runnerB,
                            },
                            set5: {
                                runnerA: resp.note.tennisPoints.set5.runnerA,
                                runnerB: resp.note.tennisPoints.set5.runnerB,
                            },
                            currentGame: {
                                runnerA: 0,
                                runnerB: 0,
                                server: null
                            },
                        },
                        validation: {
                            validationNote: resp.note.validation.validationNote,
                            isValidated: resp.note.validation.isValidated,
                            tennisPoints: {
                                set1: {
                                    runnerA: resp.note.validation.set1.runnerA,
                                    runnerB: resp.note.validation.set1.runnerB,
                                },
                                set2: {
                                    runnerA: resp.note.validation.set2.runnerA,
                                    runnerB: resp.note.validation.set2.runnerB,
                                },
                                set3: {
                                    runnerA: resp.note.validation.set3.runnerA,
                                    runnerB: resp.note.validation.set3.runnerB,
                                },
                                set4: {
                                    runnerA: resp.note.validation.set4.runnerA,
                                    runnerB: resp.note.validation.set4.runnerB,
                                },
                                set5: {
                                    runnerA: resp.note.validation.set5.runnerA,
                                    runnerB: resp.note.validation.set5.runnerB,
                                },
                                currentGame: {
                                    runnerA: 0,
                                    runnerB: 0,
                                    server: null
                                },
                            },
                            detailValidation: {
                                win: resp.note.validation.win,
                                lose: resp.note.validation.lose,
                                retired: resp.note.validation.retired,
                            }
                        }
                    },
                }
                let note = new Notes({
                    _id: new mongoose.Types.ObjectId(),
                    created: temp.created,
                    lastUpdate: temp.lastUpdate,
                    note: temp.note,
                });
                note
                    .save()
                    .then(result => {
                        console.log(result)
                    })
            }

            res.status(200).json({
                message: 'ok'
            });
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })
}

 */
