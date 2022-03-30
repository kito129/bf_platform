class TradeClass {

    constructor(market, strategyId) {

        this.created = Date.now()
        this.lastUpdate = Date.now()
        this.trade = {
            info: {
                strategyId: '',
                tennisTournamentId: '',
                date: 0,
                marketInfo: {
                    marketName: '',
                    marketId: '',
                    sport: '',
                },
                executor: [],
                exchange: {
                    name: '',
                    commission: 0,
                },
                note: {
                    description: null,
                    entry: null,
                    exit: null,
                    position: null,
                    mm: null,
                    odds: null,
                    post: null,
                }
            },
            selections: [],
            trades: {
                back: [],
                lay: []
            },
            exposition: [],
            result: {
                grossProfit: 0,
                netProfit: 0,
                rr: 0,
                commissionPaid: 0,
                maxRisk: 0,
                correctionPl: 0,
                finalScore: {
                    tennis: {
                        set1: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set2: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set3: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set4: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set5: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        currentGame: {
                            runnerA: null,
                            runnerB: null,
                            server: null,
                        }
                    },
                    football: {
                        home: 0,
                        away: 0,
                    }
                }
            },
        }

        // INFO
        this.trade.info.date = market.marketUpdates.updates.closed
        this.trade.info.marketInfo.marketId =  market.marketInfo.marketId
        this.trade.info.marketInfo.marketName =  market.marketInfo.name
        this.trade.info.marketInfo.sport = market.marketInfo.sport
        this.trade.info.exchange.name = 'UK KEVIN'
        this.trade.info.exchange.commission = 0.02
        this.trade.info.executor = ['BOT DEMO']
        this.trade.info.strategyId = strategyId

        // SELECTION
        this.trade.selections.push({
            runnerId: market.marketSelections.runners[0].id,
            runnerName: market.marketSelections.runners[0].name,
            winner: +market.marketInfo.winner.id === +market.marketSelections.runners[0].id,
            bsp: market.marketSelections.runners[0].inPlayOdds,
            avg: {
                back: {
                    odds: 0,
                    stake: 0,
                },
                lay: {
                    odds: 0,
                    bank: 0,
                    liability: 0,
                }
            }
        })
        this.trade.selections.push({
            runnerId: market.marketSelections.runners[1].id,
            runnerName: market.marketSelections.runners[1].name,
            winner: +market.marketInfo.winner.id === +market.marketSelections.runners[1].id,
            bsp: market.marketSelections.runners[1].inPlayOdds,
            avg: {
                back: {
                    odds: 0,
                    stake: 0,
                },
                lay: {
                    odds: 0,
                    bank: 0,
                    liability: 0,
                }
            }
        })

        // EXPOSITION
        this.trade.exposition = [
            {
                back: 0,
                lay: 0,
                selectionN: 0,
            },
            {
                back: 0,
                lay: 0,
                selectionN: 1,
            }
        ]

        // RESULT
        this.trade.result = {
            grossProfit: 0,
            netProfit: 0,
            rr: 0,
            commissionPaid: 0,
            maxRisk: 0,
            correctionPl: 0,
            finalScore:{
                tennis: {
                    set1: {
                        runnerA: 0,
                        runnerB: 0,
                    },
                    set2: {
                        runnerA: 0,
                        runnerB: 0,
                    },
                    set3: {
                        runnerA: 0,
                        runnerB: 0,
                    },
                    set4: {
                        runnerA: 0,
                        runnerB: 0,
                    },
                    set5: {
                        runnerA: 0,
                        runnerB: 0,
                    },
                    currentGame: {
                        runnerA: null,
                        runnerB: null,
                        server: null,
                    }
                },
                football: {
                    home: 0,
                    away: 0,
                }
            }
        }
    }

    generateBackTrade(odds, time, selectionN, stake){

        this.trade.trades.back.push({
            selectionN: selectionN,
            odds: odds,
            stake: stake,
            ifWin: stake * (odds-1),
            condition: {
                tennis: {
                    isTennis: true,
                    point: {
                        set1: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set2: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set3: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set4: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set5: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        currentGame: {
                            runnerA: null,
                            runnerB: null,
                            server: null,
                        }
                    }
                },
                football: {
                    isFootball: false,
                    point: {
                        home: 0,
                        away: 0,
                    }
                },
                horse: {
                    isHorse: false,
                },
                note: 'Back entry',
                time: time,
            }
        })

    }

    generateLayTrade(odds, time, selectionN, bank, liability){

        this.trade.trades.lay.push({
            selectionN: selectionN,
            odds: odds,
            bank: bank,
            liability: liability,
            ifWin: bank,
            condition: {
                tennis: {
                    isTennis: true,
                    point: {
                        set1: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set2: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set3: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set4: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        set5: {
                            runnerA: 0,
                            runnerB: 0,
                        },
                        currentGame: {
                            runnerA: null,
                            runnerB: null,
                            server: null,
                        }
                    }
                },
                football: {
                    isFootball: false,
                    point: {
                        home: 0,
                        away: 0,
                    }
                },
                horse: {
                    isHorse: false,
                },
                note: 'Exit',
                time: time,
            }
        })

    }

    updateExpositionTrade(){

        let allExposition = []

        // generate exposition
        let exp =0
        while (exp<this.trade.exposition.length){
            allExposition.push({
                selectionN: exp,
                trade:{
                    back: this.trade.trades.back.filter(x =>{
                        if (x.selectionN === exp){
                            return {
                                odds: x.odds,
                                stake: x.stake,
                                ifWin: x.ifWin,
                            }
                        }
                    }),
                    lay: this.trade.trades.lay.filter(x => {
                        if (x.selectionN === exp) {
                            return {
                                odds: x.odds,
                                bank: x.bank,
                                liability: x.liability,
                                ifWin: x.ifWin,
                            }
                        }
                    }),
                },
                exposition: {
                    back: null,
                    lay: null
                }
            })
            exp++
        }

        // calculate expositon for single trade
        for (let exposition of allExposition){
            let toWinBack =0
            let toWinLay =0
            let toLoseBack =0
            let toLoseLay =0

            //check back
            for(let back of exposition.trade.back){
                toWinBack = toWinBack + back.ifWin
                toLoseBack = toLoseBack + back.stake
            }
            //check lay
            for(let lay of exposition.trade.lay){
                toWinLay = toWinLay + lay.ifWin
                toLoseLay = toLoseLay + lay.liability
            }

            exposition.exposition.back = toWinBack - toLoseLay
            exposition.exposition.lay = toWinLay - toLoseBack
        }


        // check for other exposition
        let otherExp = []
        allExposition.map( x => {
            otherExp.push({
                selectionN : x.selectionN,
                back: x.exposition.back,
                lay: x.exposition.lay
            })
        })

        for (let exp of allExposition){
            let backSum = 0
            let laySum = 0
            for (let e of otherExp){
                if(e.selectionN!==exp.selectionN){
                    backSum += e.back
                    laySum += e.lay
                }
            }
            exp.exposition.back += laySum
            exp.exposition.lay += backSum
        }

        // append expostion to trade
        let l =0
        for (let exposition of this.trade.exposition) {
            exposition.back = allExposition[l].exposition.back
            exposition.lay = allExposition[l].exposition.lay
            l++
        }

    }

    updateResult(winnerIndex, maxRisk){

        // check for total exposition
        this.trade.result.grossProfit = this.trade.exposition[winnerIndex].back


        //check for commission
        if(this.trade.result.grossProfit>0){

            // commission
            this.trade.result.commissionPaid = this.trade.info.exchange.commission * this.trade.result.grossProfit
            this.trade.result.netProfit = this.trade.result.grossProfit - this.trade.result.commissionPaid

        } else {
            this.trade.result.commissionPaid =0
            this.trade.result.netProfit = this.trade.result.grossProfit
        }

        // update with correction
        this.trade.result.netProfit += this.trade.result.correctionPl
        this.trade.result.grossProfit += this.trade.result.correctionPl

        // set max risk
        this.trade.result.maxRisk = -maxRisk

        // RR
        // find max rr
        if(this.trade.result.maxRisk){
            this.trade.result.rr = this.trade.result.netProfit/-this.trade.result.maxRisk
        }

    }

    avgOddsForSelection(){

        let sel1= {
            odds: 0,
            stake: 0,
            size: 0
        }
        let sel2= {
            odds: 0,
            stake: 0,
            size: 0
        }

        //check selection in BACK
        for (const x of this.trade.trades.back){
            if(x.selectionN === 0){
                sel1.size++
                sel1.stake += x.stake
                sel1.odds = (sel1.odds + (x.odds * x.stake)) / sel1.stake

            } else if(x.selectionN === 1){
                sel2.size++
                sel2.stake += x.stake
                sel2.odds = (sel2.odds + (x.odds * x.stake)) / sel2.stake
            }
        }
        //chek for sel 1
        if(sel1.odds!==0){
            this.trade.selections[0].avg.back.odds = sel1.odds
            this.trade.selections[0].avg.back.stake = sel1.stake
        }
        if(sel2.odds!==0){
            this.trade.selections[1].avg.back.odds = sel2.odds
            this.trade.selections[1].avg.back.stake = sel2.stake
        }

        // reset
        sel1= {
            odds: 0,
            stake: 0,
            size: 0
        }
        sel2= {
            odds: 0,
            stake: 0,
            size: 0
        }

        //check selection in LAY
        for (const y of this.trade.trades.lay){
            if(y.selectionN === 0){
                sel1.size++
                sel1.stake += y.bank
                sel1.odds = (sel1.odds + (y.odds * y.bank)) / sel1.stake

            } else if(y.selectionN === 1){
                sel2.size++
                sel2.stake += y.bank
                sel2.odds = (sel2.odds + (y.odds * y.bank)) / sel2.stake
            }
        }
        //chek for sel 1
        if(sel1.odds!==0){
            this.trade.selections[0].avg.lay.odds = sel1.odds
            this.trade.selections[0].avg.lay.bank = sel1.stake
            this.trade.selections[0].avg.lay.liability = sel1.stake * (sel1.odds-1)
        }
        if(sel2.odds!==0){
            this.trade.selections[1].avg.lay.odds = sel2.odds
            this.trade.selections[1].avg.lay.bank = sel2.stake
            this.trade.selections[1].avg.lay.liability = sel2.stake * (sel2.odds-1)
        }
    }
}

// all function for calculate goes in other files

module.exports.tradeClass = TradeClass
