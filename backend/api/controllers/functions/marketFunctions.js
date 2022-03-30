const Info = require("../../models/marketBasic/marketInfoBasic");
const Runners = require("../../models/marketBasic/marketRunnersBasic");
const Odds = require("../../models/marketBasic/marketOddsBasic");
const Updates = require("../../models/marketBasic/marketUpdatesBasic");
const AdditionalInfoTennis = require("../../models/marketAdditionalInfoTennis");

exports.getMarketDetailsById = (id, isSelection, selectionId) =>{
    return new Promise(function(myResolve, myReject) {

        console.log("Resolving market: " + id + ' and selection: ' + selectionId);

        let myId = id
        let notFound = false

        let response = {
            marketId: myId,
            marketInfo: {},
            marketUpdates: {},
            marketOdds: {},
            marketRunners: {},
            marketAdditionalInfo: []
        }

        // INFO
        Info.find({ marketId: myId })
            .exec()
            .then(docs => {
                if (docs !== null && docs.length>0) {
     
                    response.marketInfo =
                        docs.map(doc => {
                            return {
                                _id: doc._id,
                                marketId: doc.marketId,
                                marketType: doc.marketType,
                                marketInfo: doc.marketInfo,
                            };
                        });
                } else {
                    notFound = true
                }

                // RUNNERS
                Runners.find({ marketId: myId })
                    .exec()
                    .then(docs => {
                    
                        if (docs !== null && docs.length>0) {
                            response.marketRunners =
                                docs.map(doc => {
                                    return {
                                        _id: doc._id,
                                        marketId: doc.marketId,
                                        marketType: doc.marketType,
                                        marketRunners: doc.marketRunners,
                                    };
                                });
                        } else {
                            notFound = true
                        }

                        // ODDS
                        Odds.find({ marketId: myId })
                            .exec()
                            .then(docs => {
                                if (docs !== null && docs.length>0) {
                                    response.marketOdds =
                                        docs.map(doc => {
                                            return {
                                                _id: doc._id,
                                                marketId: doc.marketId,
                                                marketType: doc.marketType,
                                                marketOdds: doc.marketOdds,
                                            };
                                        });
                                } else {
                                    notFound = true
                                }

                                // UPDATES
                                Updates.find({ marketId: myId })
                                    .exec()
                                    .then(docs => {
                                        if (docs.length > 0) {
                                            response.marketUpdates =
                                                docs.map(doc => {
                                                    return {
                                                        _id: doc._id,
                                                        marketId: doc.marketId,
                                                        marketType: doc.marketType,
                                                        marketUpdates: doc.marketUpdates,
                                                    };
                                                })
                                        } else {
                                            notFound = true
                                        }

                                        // ADDITIONAL INFO

                                        AdditionalInfoTennis.find({ marketId: myId })
                                        .exec()
                                        .then(docs => {
                                            if (docs.length > 0) {
                                                response.marketAdditionalInfo = docs
                                            }
                                        }).then(()=>{
                                   

                                            if(!notFound){
                                                response.marketInfo = response.marketInfo[0]
                                                response.marketRunners = response.marketRunners[0]
                                                response.marketUpdates =  response.marketUpdates[0]
                                                response.marketAdditionalInfo =  response.marketAdditionalInfo[0]
                                                
                                                // here check for price selection if isSelection is true
                                                if(isSelection && selectionId){
                                                    response.marketOdds = oddsForRunnes(selectionId,response.marketPrices[0])
                                                } else {
                                                    response.marketOdds = response.marketOdds[0]
                                                }
                                                myResolve(response) // when successful

                                            } else {
                                                myReject('error');  // when error
                                            }
                                        })

                                    })
                                    // CATCH FOR UPDATES
                                    .catch(err => {
                                        console.log("ERROR:\n" + err);
                                        myReject('error');  // when error
                                    });

                            })
                            // CATCH FOR PRICES
                            .catch( err => {
                                console.log("ERROR:\n" + err);
                                myReject('error');  // when error
                            });
                        // CATCH FOR SELECTION
                    })
                    .catch( err => {
                        console.log("ERROR:\n" + err);
                        myReject('error');  // when error
                    });

                // CATCH FOR INFO
            })
            .catch( err => {
                console.log("ERROR:\n" + err);
                myReject('error');  // when error
            });
    })
}




exports.getMarketsDetailByIdArray = (id, isSelection, selectionId) =>{
    return new Promise(function(myResolve, myReject) {

        console.log("Resolving market: " + id + '\nSelection: ' + selectionId);

        let myId = id
        let notFound = false

        let response = {
            marketId: myId,
            marketInfo: {},
            marketUpdates: {},
            marketPrices: {},
            marketSelections: {}
        }

        // INFO
        Info.find({
            'id': {
                $in: id
            }
        })
            .select("_id id eventName marketType openDate name sport winner delay")
            .exec()
            .then(docs => {
                if (docs !== null && docs.length>0) {
                    response.marketInfo =
                        docs.map(doc => {
                            return {
                                marketId: doc.id,
                                eventName: doc.eventName,
                                marketType: doc.marketType,
                                openDate: doc.openDate,
                                name: doc.name,
                                sport: doc.sport,
                                winner: doc.winner,
                                delay: doc.delay,
                                _id: doc._id,
                            };
                        });
                } else {
                    notFound = true
                    console.log('not found marketInfo')
                }

                // SELECTION
                Runners.find({
                    'marketId': {
                        $in: id
                    }
                })
                    .select("_id marketId runners")
                    .exec()
                    .then(docs => {
                        if (docs !== null && docs.length>0) {
                            response.marketSelections =
                                docs.map(doc => {
                                    return {
                                        marketId: doc.marketId,
                                        runners: doc.runners,
                                        _id: doc._id
                                    };
                                });
                        } else {
                            notFound = true
                            console.log('not found selection')
                        }

                        // PRICES
                        Runners.find({
                            'marketId': {
                                $in: id
                            }
                        },{lean: true},)
                            .select("_id marketId odds")
                            .exec()
                            .then(docs => {
                                if (docs !== null && docs.length>0) {
                                    response.marketPrices =
                                        docs.map(doc => {
                                            return {
                                                marketId: doc.marketId,
                                                odds: doc.odds,
                                                _id: doc._id,
                                            };
                                        });
                                } else {
                                    notFound = true
                                    console.log('not found prices')
                                }
                                Updates.find({
                                    'marketId': {
                                        $in: id
                                    }
                                })
                                    .exec()
                                    .then(docs => {
                                        if (docs.length > 0) {
                                            response.marketUpdates =
                                                docs.map(doc => {
                                                    return {
                                                        marketId: doc.marketId,
                                                        updates: doc.updates,
                                                        _id: doc._id,
                                                    };
                                                })
                                        } else {
                                            notFound = true
                                            console.log('not found updates')
                                        }

                                        if(!notFound){

                                            response.marketInfo = response.marketInfo.sort(function(a, b) {
                                                // Sort docs by the order of their _id values in ids.
                                                return myId.indexOf(a.id) - myId.indexOf(b._id);
                                            });

                                            response.marketUpdates = response.marketUpdates.sort(function(a, b) {
                                                // Sort docs by the order of their _id values in ids.
                                                return myId.indexOf(a.marketId) - myId.indexOf(b.marketId);
                                            });

                                            response.marketPrices = response.marketPrices.sort(function(a, b) {
                                                // Sort docs by the order of their _id values in ids.
                                                return myId.indexOf(a.marketId) - myId.indexOf(b.marketId);
                                            });

                                            response.marketSelections = response.marketSelections.sort(function(a, b) {
                                                // Sort docs by the order of their _id values in ids.
                                                return myId.indexOf(a.marketId) - myId.indexOf(b.marketId);
                                            });


                                            // here check for price selection if isSelection is true
                                            if(isSelection && selectionId){
                                                let temp = []
                                                response.marketPrices.forEach( (x, index) => {
                                                    temp.push( oddsForRunnes(selectionId[index], x))
                                                })
                                                response.marketPrices = temp
                                            }


                                            myResolve(response); // when successful

                                        } else {
                                            myReject('error in found');  // when error
                                        }

                                    })
                                    // CATCH FOR UPDATES
                                    .catch(err => {
                                        console.log("ERROR:\n" + err);
                                        myReject('error updates');  // when error
                                    });

                            })
                            // CATCH FOR PRICES
                            .catch( err => {
                                console.log("ERROR:\n" + err);
                                myReject('error prices');  // when error
                            });
                        // CATCH FOR SELECTION
                    })
                    .catch( err => {
                        console.log("ERROR:\n" + err);
                        myReject('error selections');  // when error
                    });

                // CATCH FOR INFO
            })
            .catch( err => {
                console.log("ERROR:\n" + err);
                myReject('error marketInfo');  // when error
            });
    })
}





function oddsForRunnes(runnerId, prices ){

    // to fix runnerId error
    let jsonPrice = prices.odds.map(obj => obj.toJSON())
    let selectedPrice = jsonPrice.filter( x => +x.runnerId === +runnerId)[0]
    let otherPrice = jsonPrice.filter( x => +x.runnerId !== +runnerId)[0]

    let selectedTimeStamp = selectedPrice.odds.map(x => x.timestamp)
    // append price that have different timestamp
    let toAppend = []
    for (let price of otherPrice.odds){
        if(!selectedTimeStamp.includes(price.timestamp)){
            toAppend.push(convertPrices(price))
        }
    }
    selectedPrice.odds.concat(toAppend)

    return {
        prices: selectedPrice.odds.sort(function (a, b) {
            return a.timestamp - b.timestamp;
        }),
        runnerId: runnerId
    }
}

function convertPrices(price){
    return {
        timestamp: +price.timestamp,
        lpt: +(1/(1-(1/price.ltp)))//.toFixed(2)
    }
}
