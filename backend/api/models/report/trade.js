const mongoose = require('mongoose');

const tradesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: {type: Number},
    lastUpdate: {type: Number},
    trade: {
        info: {
            strategyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Strategy' },
            tennisTournamentId: { type: mongoose.Schema.Types.ObjectId, ref: 'TennisTournament' },
            date: {type: Number},
            marketInfo: {
                marketName: {type: String},
                marketId: {type: String},
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
            runnerId: {type: Number},
            runnerName: {type: String},
            winner: {type: Boolean},
            bsp: {type: Number},
            avg: {
                back: {
                    odds: {type: Number},
                    stake: {type: Number},
                },
                lay: {
                    odds: {type: Number},
                    bank: {type: Number},
                    liability: {type: Number},
                }
            }
        }],
        trades: {
            back: [{
                selectionN: {type: Number},
                odds: {type: Number},
                stake: {type: Number},
                ifWin: {type: Number},
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
            lay: [{
                selectionN: {type: Number},
                odds: {type: Number},
                bank: {type: Number},
                liability: {type: Number},
                ifWin: {type: Number},
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
            }]
        },
        exposition: [{
            back: {type: Number},
            lay: {type: Number},
            selectionN: {type: Number},
        }],
        result: {
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
    }
});





module.exports = mongoose.model('Trade', tradesSchema, 'trade');

