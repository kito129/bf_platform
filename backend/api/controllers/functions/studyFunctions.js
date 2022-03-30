const EntryController = require("../study/entryController");
const tradeClass = require("../../models/report/tradeClass");

const MarketFunction = require("./marketFunctions");
const BasketFunction = require("./basketFunctions");

// filter by bsp
module.exports.generateTrades = (basketId, entryId, strategyId) => {
    return new Promise(function (myResolve, myReject) {
        // get the entry
        EntryController.getEntryById(entryId).then( entry => {
            // get all market in basket
            BasketFunction.getBasketMarkets(basketId).then(
                function(basketMarkets) {
                    (async function loop() {
                        let trades = [];

                        let marketIds = basketMarkets.map(x=> x.marketInfo.id)
                        let selectionIds = basketMarkets.map(x=> x.selection.id)

                        let market_ = await MarketFunction.getMarketsDetailByIdArray(marketIds,true,selectionIds)
                        let temp = []
                        market_.marketId.map((x, index) => {
                            temp.push({
                                marketId: x,
                                marketInfo: market_.marketInfo[index],
                                marketUpdates: market_.marketUpdates[index],
                                marketPrices: market_.marketPrices[index],
                                marketSelections: market_.marketSelections[index],
                            })
                        })

                        temp.forEach( (market, index) => {
                            if(market){
                                let trade = checkMarketForEntity(market,entry,basketMarkets[index],strategyId)
                                if(trade){
                                    console.log('entry')
                                    trades.push(trade)
                                }
                            } else {
                                console.log('NOT ENTRY')
                            }
                        })

                        // sort by trade date
                        let response = trades.sort(function(a,b){
                            return a.trade.info.date - b.trade.info.date;
                        })
                        // return trade[]
                        return Promise.resolve(response);
                    })().then((trades) => {
                        // finish and return trades
                        myResolve(trades); // when successful
                    })
                },
                function(error) {
                    myReject('error');  // when error
                }
            )
        })
    });
}

// receive market and check if entry condition, then generate and return trade or this market
function checkMarketForEntity(market, entry, basketMarket, strategyId ) {

    // props of entry
    let myEntry = entry.entry
    let bets = myEntry.bets

    // props of market
    let prices = market.marketPrices.prices
    let inPlayTime = market.marketUpdates.updates.inPlay
    let selectionId = +basketMarket.selection.id
    let inPlayIndex = basketMarket.selection.inPlayIndex
    let selectionN = +market.marketSelections.runners[0].id === +selectionId ? 0 : 1

    // create trade
    let trade = new tradeClass.tradeClass(market, strategyId)

    // map to add found props
    let betsFound = bets.map( x => {
        return {
            entry: {
                isBack: x.entry.isBack,
                isUp: x.entry.isUp,
                odds: x.entry.odds,
                bank: x.entry.bank,
                stake: x.entry.stake,
                liability: x.entry.liability,
                timeLimit: x.entry.timeLimit,
                found: false
            },
            loss:{
                isBack: x.lossExit.isBack,
                isUp: x.lossExit.isUp,
                odds: x.lossExit.odds,
                bank: x.lossExit.bank,
                stake: x.lossExit.stake,
                liability: x.lossExit.liability,
                timeLimit: x.entry.timeLimit,
                found: false
            },
            profit: {
                isBack: x.profitExit.isBack,
                isUp: x.profitExit.isUp,
                odds: x.profitExit.odds,
                bank: x.profitExit.bank,
                stake: x.profitExit.stake,
                liability: x.profitExit.liability,
                timeLimit: x.entry.timeLimit,
                found: false
            },
            haveLoss: x.haveLoss,
            haveProfit: x.haveProfit
        }
    })

    let atLeastOneBets = false
    let risk = 0
    // for bets check entry in prices, return
    for (let bet of betsFound) {

        let pricesFound = null
        if (bet.haveLoss && bet.haveProfit) {
            // entry and profit and loss
            pricesFound = findInPrices(prices, inPlayIndex, bet.entry, bet.profit, bet.loss, inPlayTime)
        } else if (bet.haveLoss && !bet.haveProfit) {
            // entry and loss ONLY
            pricesFound = findInPrices(prices, inPlayIndex, bet.entry, null, bet.loss, inPlayTime)
        } else if (!bet.haveLoss && bet.haveProfit) {
            // entry and profit ONLY
            pricesFound = findInPrices(prices, inPlayIndex, bet.entry, bet.profit, null, inPlayTime)
        } else {
            // entry ONLY
            pricesFound = findInPrices(prices, inPlayIndex, bet.entry, null, null, inPlayTime)
        }

        // if entry the add trade, add to current risk and generate trades
        if(pricesFound.entry.found) {
            if(pricesFound.entry.isBack){
                risk+= pricesFound.entry.stake
            } else {
                risk+= pricesFound.entry.liability
            }
            generateTrades(pricesFound.entry, pricesFound.profit, pricesFound.loss, trade, selectionN)
            atLeastOneBets = true
        }
    }

    // check at least and calculate trade data
    if(atLeastOneBets){
        trade.updateExpositionTrade()
        trade.avgOddsForSelection()
        trade.updateResult(market.marketInfo.winner.position-1, risk)
        return trade
    } else {
        return null
    }
}

// find entities in prices array
function findInPrices(prices, startIndex, entry, profit, loss, inPlaytime){

    let continueSearch = true
    for(let i=startIndex; i< prices.length; i++){
        let price = prices[i]
        let currentTime = price.timestamp - inPlaytime

        let time = ` ${price.ltp} minute: ${(currentTime/ (1000 * 60)).toFixed(2)}  hour: ${(currentTime/ (1000 * 60 *60)).toFixed(2)}`

        //console.log(time)
        // not already entry, check for entry
        if(!entry.found){
            if(entry.isUp){
                // search in up cross
                if(price.ltp >= entry.odds){
                    entry.found = {
                        timestamp: price.timestamp,
                        odds: price.ltp
                    }
                }
            } else {
                // search in down cross
                if(price.ltp <= entry.odds){
                    entry.found = {
                        timestamp: price.timestamp,
                        odds: price.ltp
                    }
                }
            }
        // already entry, check for exit
        } else {
            if (profit !== null && loss !== null) {
                // loss and profit
                // check loss and loss
                if (!profit.found && !loss.found) {
                    // first check profit if false check for loss
                    if (profit.isUp) {
                        // search in up cross
                        if (price.ltp >= profit.odds) {
                            profit.found = {
                                timestamp: price.timestamp,
                                odds: price.ltp
                            }
                            continueSearch = false
                        }
                    } else {
                        // search in down cross
                        if (price.ltp <= profit.odds) {
                            profit.found = {
                                timestamp: price.timestamp,
                                odds: price.ltp
                            }
                            continueSearch = false
                        }
                    }
                    // if not found profit check for exit
                    if (!profit.found) {
                        if (loss.isUp) {
                            // search in up cross
                            if (price.ltp >= loss.odds) {
                                loss.found = {
                                    timestamp: price.timestamp,
                                    odds: price.ltp
                                }
                                continueSearch = false
                            }
                        } else {
                            // search in down cross
                            if (price.ltp <= loss.odds) {
                                loss.found = {
                                    timestamp: price.timestamp,
                                    odds: price.ltp
                                }
                                continueSearch = false
                            }
                        }
                    }
                }
            } else if (profit === null && loss !== null) {
                // loss and NOT profit
                // check only for loss
                if (!loss.found) {
                    if (loss.isUp) {
                        // search in up cross
                        if (price.ltp >= loss.odds) {
                            loss.found = {
                                timestamp: price.timestamp,
                                odds: price.ltp
                            }
                            continueSearch = false
                        }
                    } else {
                        // search in down cross
                        if (price.ltp <= loss.odds) {
                            loss.found = {
                                timestamp: price.timestamp,
                                odds: price.ltp
                            }
                            continueSearch = false
                        }
                    }
                }

            } else if (profit !== null && loss === null) {
                // NOT loss and profit
                // check only for profit
                if (!profit.found) {
                    if (profit.isUp) {
                        // search in up cross
                        if (price.ltp >= profit.odds) {
                            profit.found = {
                                timestamp: price.timestamp,
                                odds: price.ltp
                            }
                            continueSearch = false
                        }
                    } else {
                        // search in down cross
                        if (price.ltp <= profit.odds) {
                            profit.found = {
                                timestamp: price.timestamp,
                                odds: price.ltp
                            }
                            continueSearch = false
                        }
                    }
                }

            } else {
                continueSearch = false
            }
        }
        // check for break iteration
        if(!continueSearch){
            break
        }
    }
    return {
        entry: entry,
        loss: loss,
        profit: profit,
    }
}

// generate trades based on props
function generateTrades(entry, profit,loss,trade, selectionN){

    // entry trade
    if(entry.isBack && entry.found !== false){
        trade.generateBackTrade(entry.odds,entry.found.timestamp, selectionN, entry.stake)
    } else {
        trade.generateLayTrade(entry.odds, entry.found.timestamp, selectionN, entry.bank, entry.liability)
    }

    // loss trade
    if(loss!==null && loss.found !== false){
        if(loss.isBack){
            trade.generateBackTrade(loss.odds,loss.found.timestamp, selectionN, loss.stake)
        } else {
            trade.generateLayTrade(loss.odds, loss.found.timestamp, selectionN, loss.bank, loss.liability)
        }
    }

    // profit trade
    if(profit!==null && profit.found !== false){
        if(profit.isBack){
            trade.generateBackTrade(profit.odds,profit.found.timestamp, selectionN, profit.stake)
        } else {
            trade.generateLayTrade(profit.odds, profit.found.timestamp, selectionN, profit.bank, profit.liability)
        }
    }
}


