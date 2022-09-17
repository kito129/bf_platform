const Strategy = require("../models/report/strategy");

const Trade = require("../models/report/newTrade");
const SavedReport = require("../models/report/savedReport");


let mongoose = require('mongoose');


// TRADE

// return all trades
exports.get_all_trades = (req, res, next) => {
    Trade.find()
        .select("_id created lastUpdate trade")
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        trade: doc.trade,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response.sort(function(a,b){
                    return a.trade.info.date - b.trade.info.date;
                }));
            } else {
                res.status(404).json({
                    message: 'No trades found in DB'
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


// create strategy
exports.create_trade = (req, res, next) => {
    let createdTrade;
    let trade = new Trade({
        _id: new mongoose.Types.ObjectId(),
        created: req.body.created,
        lastUpdate: req.body.lastUpdate,
        trade: req.body.trade,
    });
    trade
        .save()
        .then(result => {
            createdTrade =  {
                _id: result._id,
                created: result.created,
                lastUpdate: result.lastUpdate,
                trade: result.trade,
            }
            res.status(200).json(createdTrade);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json(JSON.stringify({
                error: err
            }));
        })

};

// update trade by _id
exports.update_trade_by_id = (req, res, next) => {
    const myId = req.params.tradeId;
    let updated
    Trade.findOneAndUpdate({_id: myId},req.body, { new: true})
        .select("_id created lastUpdate trade")
        .exec()
        .then(docs => {
            updated ={
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                trade: docs.trade,
                _id: docs._id,
            }
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })

};


// delete trade by _id
exports.delete_trade_by_id = (req, res, next) => {
    const myId = req.params.tradeId;
    let removed
    Trade.findOneAndRemove({_id: myId})
        .exec()
        .then(docs => {
            removed = {
                created: docs.created,
                updated: docs.updated,
                trade: docs.trade,
                _id: docs._id,
            }
            res.status(200).json(removed);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })

};

// delete many trade by _id array
exports.delete_many_trades_by_ids = (req, res, next) => {
    const myIds = req.body;
    console.log(myIds)
    Trade.deleteMany({_id: myIds})
        .exec()
        .then(docs => {
            if(docs.n>0){
                res.status(200).json(myIds);
            } else {
                res.status(200).json([]);
            }
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })

};


// STRATEGY

// return all strategy
exports.get_all_strategy = (req, res, next) => {
    Strategy.find()
        .select("_id created lastUpdate strategy")
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        strategy: doc.strategy,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message: 'No strategy found in DB'
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


// create strategy
exports.create_strategy = (req, res, next) => {
    let createdStrategy;
    let strategy = new Strategy({
        _id: new mongoose.Types.ObjectId(),
        created: req.body.created,
        lastUpdate: req.body.lastUpdate,
        strategy: req.body.strategy,
    });
    strategy
        .save()
        .then(result => {
            createdStrategy =  {
                _id: result._id,
                created: result.created,
                lastUpdate: result.lastUpdate,
                strategy: result.strategy,
            }
            res.status(200).json(createdStrategy);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json(JSON.stringify({
                error: err
            }));
        })

};

// update strategy by _id
exports.update_strategy_by_id = (req, res, next) => {
    const myId = req.params.strategyId;
    let updated
    Strategy.findOneAndUpdate({_id: myId},req.body, { new: true})
        .select("_id created lastUpdate strategy")
        .exec()
        .then(docs => {
            updated ={
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                strategy: docs.strategy,
                _id: docs._id,
            }
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })

};


// delete strategy by _id
exports.delete_strategy_by_id = (req, res, next) => {
    const myId = req.params.strategyId;
    let removed
    Strategy.findOneAndRemove({_id: myId})
        .exec()
        .then(docs => {
            removed = {
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                strategy: docs.strategy,
                _id: docs._id,
            }
            res.status(200).json(removed);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })
};

exports.strategy_get_info_by_name = (req, res, next) => {

    let strategyName = req.body.name

    Strategy.find({"strategy.info.name": strategyName})
    .exec()
    .then(docs => {
        const response =
            docs.map(doc => {
                return {
                    name: doc.strategy.info.name,
                    id: doc._id,
                };
            });
        if (docs.length >= 0) {
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'No entries found'
            });
        }
    })
    .catch(err => {
        console.log("ERROR:\n" + err);
        res.status(500).json({
            error: err
        });
    });    
}





// return all trades
exports.fix_trades_schema = (req, res, next) => {
    let response
    Trade.find()
        .select("_id created lastUpdate trade")
        .exec()
        .then(docs => {
            response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        trade: doc.trade,
                        _id: doc._id,
                    };
                });
        })
        .catch(err => {
            console.log("ERRO in cathcR:\n" + err);
            res.status(500).json({
                error: err
            });
        }).then( ()=>{
        let temp = {}
        for(let resp of response) {
            // generate temp newTrade and set info
            temp = {
                created: resp.created,
                lastUpdate: resp.lastUpdate,
                trade: {
                    info: {
                        setTime: {
                            second: null,
                            third: null,
                        },
                        strategyId: resp.trade.info.strategyId,
                        tennisTournamentId: resp.trade.info.tennisTournamentId,
                        date:resp.trade.info.date,
                        marketInfo: {
                            marketName: resp.trade.info.marketInfo.marketName,
                            marketId: resp.trade.info.marketInfo.marketName,
                            marketType: "MATCH_ODDS",
                            eventName: "Match Odds",
                            sport: resp.trade.info.marketInfo.marketName,
                        },
                        executor: resp.trade.info.executor,
                        exchange: resp.trade.info.exchange,
                        note: {
                            description: resp.trade.info.note.description,
                            entry: resp.trade.info.note.entry,
                            exit: resp.trade.info.note.exit,
                            position: resp.trade.info.note.position,
                            mm: resp.trade.info.note.mm,
                            odds: '',
                            post: resp.trade.info.note.post,
                        }
                    },
                    selections: [],
                    trades: [],
                    results: resp.trade.result,
                    params: [
                        {
                            runnerId: 0,
                            params1: 0,
                            params2: 0,
                            params3: 0,
                            params4: 0,
                            params5: 0,
                            params6: 0,
                            params7: 0,
                            params8: 0,
                            params9: 0,
                            params10: 0,

                        },
                        {
                            runnerId: 0,
                            params1: 0,
                            params2: 0,
                            params3: 0,
                            params4: 0,
                            params5: 0,
                            params6: 0,
                            params7: 0,
                            params8: 0,
                            params9: 0,
                            params10: 0,

                        }
                    ],
                    stats: [
                        {
                            runnerId: 0,
                            stats1: 0,
                            stats2: 0,
                            stats3: 0,
                            stats4: 0,
                            stats5: 0,
                            stats6: 0,
                            stats7: 0,
                            stats8: 0,
                            stats9: 0,
                            stats10: 0,
                        },
                        {
                            runnerId: 0,
                            stats1: 0,
                            stats2: 0,
                            stats3: 0,
                            stats4: 0,
                            stats5: 0,
                            stats6: 0,
                            stats7: 0,
                            stats8: 0,
                            stats9: 0,
                            stats10: 0,
                        },
                    ]
                }
            }
            // add trade
            let backTrade = resp.trade.trades.back
            let layTrade = resp.trade.trades.lay
            let copyTrade = []
            let inc =0
            for (let bt of backTrade){
                inc++
                tempBack = {
                    id: inc,
                    selectionN: bt.selectionN,
                    odds: bt.odds,
                    stake: bt.stake,
                    liability: bt.stake,
                    ifWin: bt.stake*(bt.odds-1),
                    options: "",
                    type: "back",
                    condition: bt.condition
                }
                copyTrade.push(tempBack)
            }
            inc =0
            for (let lt of layTrade){
                inc++
                tempLay = {
                    id: inc,
                    selectionN: lt.selectionN,
                    odds: lt.odds,
                    stake: lt.bank,
                    liability: lt.liability,
                    ifWin: lt.ifWin,
                    options: "",
                    type: "lay",
                    condition: lt.condition
                }
                copyTrade.push(tempLay)
            }

            // reorder by time and reassign id
            let count=0
            copyTrade = copyTrade
            .sort((a,b) =>
                a.condition.time-b.condition.time>0 ? 1 : a.condition.time-b.condition.time==0 ? 0 : -1)
                .map(x=> {
                count++
                let copy = JSON.parse(JSON.stringify(x))
                copy.id=count
                return copy
            })

            temp.trade.trades = copyTrade

            // add selection
            selN = 0
            for(let selection of resp.trade.selections){
                // calculate avg
                let backOddsWeight =0
                let backStake=0
                let backFound = false
                let layOddsWeight=0
                let layStake=0
                let layFound = false

                temp.trade.trades.forEach(element => {
                    if(element.type==="back" && element.selectionN===selN && element.odds>1){
                        backFound=true
                        backStake += element.stake
                        backOddsWeight += (element.odds * element.stake)
                    }
                    if(element.type==="lay" && element.selectionN===selN && element.odds>1){
                        layFound=true
                        layStake += element.stake
                        layOddsWeight += (element.odds * element.stake)
                    }
                });
                // avg odds
                let backOdds= backFound ? backOddsWeight / backStake : 0
                let layOdds= layFound ? layOddsWeight / layStake : 0

                // generate selection
                let tempSelection = {
                    selectionN: selN,
                    runnerId: selection.runnerId,
                    runnerName: selection.runnerName,
                    winner: selection.winner,
                    bsp: selection.bsp,
                    avg: {
                        back: {
                            odds: backOdds,
                            stake: backFound ? backStake : 0,
                            toWin: backFound ? backStake*(backOdds-1) : 0,
                            liability: backFound ? backStake : 0,
                        },
                        lay: {
                            odds: layOdds,
                            stake: layFound ? layStake: 0,
                            toWin: layFound ? layStake: 0,
                            liability: layFound ? layStake*(layOdds-1): 0,
                        }
                    },
                    sets: {
                        secondSet: 0,
                        thirdSet: 0
                    },
                    
                }
                temp.trade.selections.push(tempSelection)
                selN++
            }


            let newTrade = new Trade({
                _id: new mongoose.Types.ObjectId(),
                created: temp.created,
                updated: temp.lastUpdate,
                trade: temp.trade,
            });

            /*
            let trade = new Trade({
                _id: new mongoose.Types.ObjectId(),
                created: temp.created,
                lastUpdate: temp.lastUpdate,
                trade: temp.trade,
            });

             */

    
            newTrade
                .save()
                .then(result => {
                    console.log(result)
                })
    
        }

        res.status(200).json({
            message: 'ok'
        });



    }).catch(err => {
        console.log("ERROR in eleaborate:\n" + err);
        res.status(500).json({
            error: err
        });
    })
};


// savedReport

// return all savedReport
exports.get_all_savedReport = (req, res, next) => {
    SavedReport.find()
        .select("_id created updated savedReport")
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        updated: doc.lastUpdate,
                        savedReport: doc.savedReport,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message: 'No savedReport found in DB'
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


// create savedReport
exports.create_savedReport = (req, res, next) => {
    let createdSavedReport;
    let savedReport = new SavedReport({
        _id: new mongoose.Types.ObjectId(),
        created: req.body.created,
        updated: req.body.updated,
        savedReport: req.body.savedReport,
    });
    savedReport
        .save()
        .then(result => {
            createdSavedReport =  {
                _id: result._id,
                created: result.created,
                updated: result.updated,
                savedReport: result.savedReport,
            }
            res.status(200).json(createdSavedReport);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json(JSON.stringify({
                error: err
            }));
        })

};

// update savedReport by _id
exports.update_savedReport_by_id = (req, res, next) => {
    const myId = req.params.savedReportId;
    let updated
    SavedReport.findOneAndUpdate({_id: myId},req.body, { new: true})
        .select("_id created updated savedReport")
        .exec()
        .then(docs => {
            updated ={
                created: docs.created,
                updated: docs.updated,
                savedReport: docs.savedReport,
                _id: docs._id,
            }
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })

};


// delete savedReport by _id
exports.delete_savedReport_by_id = (req, res, next) => {
    const myId = req.params.savedReportId;
    let removed
    SavedReport.findOneAndRemove({_id: myId})
        .exec()
        .then(docs => {
            removed = {
                created: docs.created,
                updated: docs.lastUpdate,
                savedReport: docs.savedReport,
                _id: docs._id,
            }
            res.status(200).json(removed);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })
};