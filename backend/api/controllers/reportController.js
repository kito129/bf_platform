const Trade = require("../models/report/trade");
const Strategy = require("../models/report/newStrategy");

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
                lastUpdate: docs.lastUpdate,
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
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        }).then( ()=>{
        let temp = {}

        for(let resp of response) {
            temp = {
                created: resp.created,
                lastUpdate: resp.lastUpdate,
                trade: {
                    info: {
                        strategyId: resp.trade.info.strategyId,
                        date:resp.trade.info.date,
                        marketInfo: resp.trade.info.marketInfo,
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
                    trades: {
                        back: [],
                        lay: []
                    },
                    exposition: resp.trade.exposition,
                    result: {
                        grossProfit: resp.trade.result.grossProfit,
                        netProfit: resp.trade.result.netProfit,
                        rr: resp.trade.result.rr,
                        commissionPaid: resp.trade.result.commissionPaid,
                        maxRisk: resp.trade.result.maxRisk,
                        correctionPl: resp.trade.result.correctionPl,
                        finalScore: {
                            tennis: {
                                set1: {
                                    runnerA: resp.trade.result.finalScore.tennis.set1.runnerA,
                                    runnerB: resp.trade.result.finalScore.tennis.set1.runnerB,
                                },
                                set2: {
                                    runnerA: resp.trade.result.finalScore.tennis.set2.runnerA,
                                    runnerB: resp.trade.result.finalScore.tennis.set2.runnerA,
                                },
                                set3: {
                                    runnerA: resp.trade.result.finalScore.tennis.set3.runnerA,
                                    runnerB: resp.trade.result.finalScore.tennis.set3.runnerA,
                                },
                                set4: {
                                    runnerA: resp.trade.result.finalScore.tennis.set4.runnerA,
                                    runnerB: resp.trade.result.finalScore.tennis.set4.runnerA,
                                },
                                set5: {
                                    runnerA: resp.trade.result.finalScore.tennis.set5.runnerA,
                                    runnerB: resp.trade.result.finalScore.tennis.set5.runnerA,
                                },
                                currentGame: {
                                    runnerA: resp.trade.result.finalScore.tennis.currentGame.runnerA,
                                    runnerB: resp.trade.result.finalScore.tennis.currentGame.runnerB,
                                    server: resp.trade.result.finalScore.tennis.currentGame.server,
                                }
                            },
                            football: {
                                home: 0,
                                away: 0,
                            }
                        }
                    },
                }
            }
            let backTrade = resp.trade.trades.back
            let layTrade = resp.trade.trades.lay

            for (let bt of backTrade){
                tempBack = {
                    selectionN: bt.selectionN,
                    odds: bt.odds,
                    stake: bt.stake,
                    ifWin: bt.ifWin,
                    condition: {
                        tennis: {
                            isTennis:  bt.condition.tennis.isTennis,
                            point: {
                                set1: {
                                    runnerA: bt.condition.tennis.point.set1.runnerA,
                                    runnerB: bt.condition.tennis.point.set1.runnerB,
                                },
                                set2: {
                                    runnerA: bt.condition.tennis.point.set2.runnerA,
                                    runnerB: bt.condition.tennis.point.set2.runnerB,
                                },
                                set3: {
                                    runnerA: bt.condition.tennis.point.set3.runnerA,
                                    runnerB: bt.condition.tennis.point.set3.runnerB,
                                },
                                set4: {
                                    runnerA: bt.condition.tennis.point.set4.runnerA,
                                    runnerB: bt.condition.tennis.point.set4.runnerB,
                                },
                                set5: {
                                    runnerA:  bt.condition.tennis.point.set5.runnerA,
                                    runnerB:  bt.condition.tennis.point.set5.runnerB,
                                },
                                currentGame: {
                                    runnerA: bt.condition.tennis.point.currentGame.runnerA,
                                    runnerB: bt.condition.tennis.point.currentGame.runnerB,
                                    server: bt.condition.tennis.point.currentGame.server,
                                }
                            }
                        },
                        football: {
                            isFootball: bt.condition.football.isFootball,
                            point: {
                                home: 0,
                                away: 0,
                            }
                        },
                        horse: {
                            isHorse: bt.condition.horse.isHorse,
                        },
                        note: bt.condition.note,
                        time: bt.condition.time,
                    }
                }
                temp.trade.trades.back.push(tempBack)
            }

            for (let lt of layTrade){
                tempLay = {
                    selectionN: lt.selectionN,
                    odds: lt.odds,
                    bank: lt.bank,
                    liability: lt.liability,
                    ifWin: lt.ifWin,
                    condition: {
                        tennis: {
                            isTennis:  lt.condition.tennis.isTennis,
                            point: {
                                set1: {
                                    runnerA: lt.condition.tennis.point.set1.runnerA,
                                    runnerB: lt.condition.tennis.point.set1.runnerB,
                                },
                                set2: {
                                    runnerA: lt.condition.tennis.point.set2.runnerA,
                                    runnerB: lt.condition.tennis.point.set2.runnerB,
                                },
                                set3: {
                                    runnerA: lt.condition.tennis.point.set3.runnerA,
                                    runnerB: lt.condition.tennis.point.set3.runnerB,
                                },
                                set4: {
                                    runnerA: lt.condition.tennis.point.set4.runnerA,
                                    runnerB: lt.condition.tennis.point.set4.runnerB,
                                },
                                set5: {
                                    runnerA:  lt.condition.tennis.point.set5.runnerA,
                                    runnerB:  lt.condition.tennis.point.set5.runnerB,
                                },
                                currentGame: {
                                    runnerA: lt.condition.tennis.point.currentGame.runnerA,
                                    runnerB: lt.condition.tennis.point.currentGame.runnerB,
                                    server: lt.condition.tennis.point.currentGame.server,
                                }
                            }
                        },
                        football: {
                            isFootball: lt.condition.football.isFootball,
                            point: {
                                home: 0,
                                away: 0,
                            }
                        },
                        horse: {
                            isHorse: lt.condition.horse.isHorse,
                        },
                        note: lt.condition.note,
                        time: lt.condition.time,
                    }
                }
                temp.trade.trades.lay.push(tempLay)
            }

            for(let selection of resp.trade.selections){
                let tempSelection = {
                    runnerId: selection.runnerId,
                    runnerName: selection.runnerName,
                    winner: selection.winner,
                    bsp: selection.bsp,
                    avg: {
                        back: {
                            odds: 1.01,
                            stake: 0,
                        },
                        lay: {
                            odds: 1.01,
                            bank: 0,
                            liability: 0,
                        }
                    }
                }
                temp.trade.selections.push(tempSelection)
            }

            let trade = new Trade({
                _id: new mongoose.Types.ObjectId(),
                created: temp.created,
                lastUpdate: temp.lastUpdate,
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
            trade
                .save()
                .then(result => {
                    console.log(result)
                })
        }


        res.status(200).json({
            message: 'ok'
        });



    }).catch(err => {
        console.log("ERROR:\n" + err);
        res.status(500).json({
            error: err
        });
    })
};
