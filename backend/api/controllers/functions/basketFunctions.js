let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise
const Basket = require("../../models/study/basket/basket_refactor")
const RelativeBasketMarket = require("../../models/study/basket/relativeMarketsBasket")

const PlayersFunctions = require(".//playerFunctions");


const Selection = require("../../models/marketBasic/marketRunnersBasic");
const Market = require("../../models/marketBasic/marketInfoBasic");

exports.getBasketMarkets = (basketId) =>{
    return new Promise(function(myResolve, myReject) {
        Basket.findOne({_id: basketId})
            .select("_id created lastUpdate basket")
            .exec()
            .then(doc => {
                const basket =
                    {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        basket: doc.basket,
                        _id: doc._id,
                    };
                let relativeMarkets = basket.basket.relativeMarkets
                RelativeBasketMarket.findOne({_id: relativeMarkets})
                    .select("_id markets")
                    .exec()
                    .then(doc => {
                        const relative =
                            {
                                markets: doc.markets,
                                _id: doc._id,
                            };
                        myResolve(relative.markets); // when successful
                    })
                    // catch relative
                    .catch(err => {
                        console.log("ERROR RELATIVE:\n" + err);
                        myReject(err)
                    });
                // catch basket
            })
            .catch(err => {
                console.log("ERROR BASKET:\n" + err);
                myReject(err)
            });
    })
}


/*
** BSP FILTER
*/
exports.filterByBspMinMax = (min, max, bspFilter, sport, options) => {
    return new Promise(function(myResolve, myReject) {
        const mySport = sport;
        let marketsGteLte = []
        Selection.find()
            .and([
                { "runners.inPlayOdds": {$lte : max, $ne : 0}},
            ])
            .select('marketId _id runners.id runners.name runners.inPlayOdds runners.inPlayIndex runners.lengthOddsInPlay')
            .exec()
            .then(selectionsLte => {
                marketsGteLte = filterGte(selectionsLte,marketsGteLte,min,max)
                let queryMarketId = {id: { $in: marketsGteLte.map(x => x.marketId) }}
                let querySport = {sport: mySport}
                let queryOptionsNotWinner = { 'winner': { $ne: null }};

                // options for search
                // TODO this not work due to delay not present
                // filter by delay
                let queryTennisOptionsDelay
                if(options.tennis.delay3SecOnly){
                    queryTennisOptionsDelay = {'delay.inPlayDelay': {$lte : 3} }
                } else {
                    queryTennisOptionsDelay = {}
                }

                Market.find()
                    .and([
                        queryMarketId,
                        querySport,
                        queryTennisOptionsDelay,
                        queryOptionsNotWinner
                    ])
                    .select('id _id eventName marketType openDate name sport winner delay')
                    .exec()
                    .then(docs => {

                        // filter by doubles
                        let market = []
                        if(options.tennis.notDoubles){
                            market= filterDoubles(docs)
                        } else{
                            market = docs
                        }

                        // only market present in market[]
                        let marketId = market.map(markets => markets.id)
                        let value =  marketsGteLte.filter(x => marketId.includes(x.marketId))

                        // append market info
                        let resp = value.map(resp => {
                            let marketInfo = docs.filter(y => y.id === resp.marketId)[0]
                            return {
                                marketId: resp.marketId,
                                marketInfo: marketInfo,
                                selection: resp.selection
                            }
                        })

                        // filter by odds limit
                        if(options.tennis.oddsLimit>0){
                            resp =  resp.filter( x => x.selection.lengthOddsInPlay >= options.tennis.oddsLimit)
                        }

                        // return to call back
                        myResolve(resp); // when successful
                    })

            })
            .catch(err => {
                console.log("ERROR:\n" + err);
                myReject('error');  // when error
            })
    });
}

function filterGte(selections, marketsLte,min,max){
    let  toInsert = true
    for(let selection of selections){
        // im in match
        let marketId = selection.marketId
        let match = []
        for(let runner of selection.runners){
            if(runner.inPlayOdds <= max && runner.inPlayOdds>= min){
                match.push(runner)
                toInsert = true
                break
            } else{
                toInsert = false
            }
        }

        if(toInsert){
            marketsLte.push({
                marketId: marketId,
                marketInfo: null,
                selection: match[0]
            })
        }
    }
    return marketsLte
}

/*
** DOUBLES FILTER
*/

function filterDoubles(market){
    return market.filter( x => x.name.indexOf('/') ===-1)
}

/*
** PLAYERS FILTER
*/

exports.filterPlayers = (markets, playersList) => {
    return new Promise(function(myResolve, myReject) {


        PlayersFunctions.getPlayersFilters(playersList).then(
            function(playersFilter) {
                let marketNew = []

                markets.forEach(market => {
                    playersFilter.forEach(filter => {
                        let marketDate = new Date(market.marketInfo.openDate).getTime()
                        let selectionId = market.selection.id
                        if(filter.players.valid.from < marketDate && marketDate < filter.players.valid.to){
                            if(checkSelectionInArray(selectionId,filter.players.playersList)){
                                marketNew.push(market)
                            }
                        }
                    })
                })

                // return to call back
                myResolve(marketNew); // when successful

            },
            function(error) {
                console.log(error)
                myReject('error');  // when error
            }
        )
    })
}

function checkSelectionInArray(selectionId, playersFilter){
    return playersFilter.filter(x => x === selectionId).length > 0
}


