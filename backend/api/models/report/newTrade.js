const mongoose = require('mongoose');

const newTradeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: {type: Number},
    updated: {type: Number},
    trade: {
        info: {
            setTime: {
                second: {type: Number},
                third: {type: Number},
            },
            strategyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Strategy' },
            tennisTournamentId: { type: mongoose.Schema.Types.ObjectId, ref: 'TennisTournament' },
            date: {type: Number},
            marketInfo: {
                marketName: {type: String},
                marketId: {type: String},
                marketType: {type: String},
                eventName: {type: String},
                sport: {type: String},
            },
            executor: [{type: String}],
            exchange: {
                name: {type: String},
                commission: {type: Number},
            },
            note: {
                description: {type: String},
                entry: {type: String},
                exit: {type: String},
                position: {type: String},
                mm: {type: String},
                odds: {type: String},
                post: {type: String},
            }
        },
        selections: [{
            selectionN: {type: Number},
            runnerId: {type: Number},
            runnerName: {type: String},
            winner: {type: Boolean},
            bsp: {type: Number},
            sets: {
                secondSet: {type: Number},
                thirdSet: {type: Number},
            },
            avg: {
                back: {
                    odds: {type: Number},
                    stake: {type: Number},
                    toWin: {type: Number},
                    liability: {type: Number},
                },
                lay: {
                    odds: {type: Number},
                    stake: {type: Number},
                    toWin: {type: Number},
                    liability: {type: Number},
                }
            }
        }],
        trades: [{
            id: {type: Number},
            selectionN: {type: Number},
            odds: {type: Number},
            stake: {type: Number},
            liability: {type: Number},
            ifWin: {type: Number},
            options: {type: String},
            type: {type: String},
            condition: {
                tennis: {
                    isTennis: {type: Boolean},
                    point: {
                        set1: {
                            runnerA: {type: Number},
                            runnerB: {type: Number},
                        },
                        set2: {
                            runnerA: {type: Number},
                            runnerB: {type: Number},
                        },
                        set3: {
                            runnerA: {type: Number},
                            runnerB: {type: Number},
                        },
                        set4: {
                            runnerA: {type: Number},
                            runnerB: {type: Number},
                        },
                        set5: {
                            runnerA: {type: Number},
                            runnerB: {type: Number},
                        },
                        currentGame: {
                            runnerA: { type: String},
                            runnerB: { type: String},
                            server: { type: String}
                        }
                    }
                },
                football: {
                    isFootball: {type: Boolean},
                    point: {
                        home: {type: Number},
                        away: {type: Number},
                    }
                },
                horse: {
                    isHorse: {type: Boolean},
                },
                note: {type: String},
                time: {type: Number},
            }
        }],
        results: {
            grossProfit: {type: Number},
            netProfit: {type: Number},
            rr: {type: Number},
            commissionPaid: {type: Number},
            maxRisk: {type: Number},
            correctionPl: {type: Number},
            finalScore:{
                tennis: {
                    set1: {
                        runnerA: {type: Number},
                        runnerB: {type: Number},
                    },
                    set2: {
                        runnerA: {type: Number},
                        runnerB: {type: Number},
                    },
                    set3: {
                        runnerA: {type: Number},
                        runnerB: {type: Number},
                    },
                    set4: {
                        runnerA: {type: Number},
                        runnerB: {type: Number},
                    },
                    set5: {
                        runnerA: {type: Number},
                        runnerB: {type: Number},
                    },
                    currentGame: {
                        runnerA: { type: String},
                        runnerB: { type: String},
                        server: { type: String}
                    }
                },
                football: {
                    home: {type: Number},
                    away: {type: Number},
                }
            }
        },
        stats: [{
            runnerId: {type: Number},
            stats1: {type: Number},
            stats2: {type: Number},
            stats3: {type: Number},
            stats4: {type: Number},
            stats5: {type: Number},
            stats6: {type: Number},
            stats7: {type: Number},
            stats8: {type: Number},
            stats9: {type: Number},
            stats10: {type: Number},
        }],
        params: [{
            runnerId: {type: Number},
            params1: {type: Number},
            params2: {type: Number},
            params3: {type: Number},
            params4: {type: Number},
            params5: {type: Number},
            params6: {type: Number},
            params7: {type: Number},
            params8: {type: Number},
            params9: {type: Number},
            params10: {type: Number},
        }]
    }
});





module.exports = mongoose.model('newTrade', newTradeSchema, 'tradeNew');

