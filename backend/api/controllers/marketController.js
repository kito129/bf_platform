const MarketInfo = require("../models/marketBasic/marketInfoBasic");
const MarketRunners = require("../models/marketBasic/marketRunnersBasic");
const MarketOdds = require("../models/marketBasic/marketOddsBasic");
const MarketUpdates = require("../models/marketBasic/marketUpdatesBasic");

const MarketFunction = require("./functions/marketFunctions");
const marketAdditionalInfoTennis = require("../models/marketAdditionalInfoTennis");


//return all match
exports.markets_get_all = (req, res, next) => {
    MarketInfo.find()
        .exec()
        .then(docs => {
            const response = [
                 docs.map(doc => {
                    return {
                        _id: doc._id,
                        marketId: doc.marketId,
                        marketType: doc.marketType,
                        marketInfo: doc.marketInfo,
                    };
                })
            ];
            if (docs.length >= 0) {
                res.status(200).json(response.sort(function(a,b){
                    return new Date(b.openDate) - new Date(a.openDate);
                }));
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
};

exports.markets_get_counts = (req, res, next) => {
    MarketInfo.count()
        .exec()
        .then(docs => {
            const response = docs.length
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
};


//return all match
exports.markets_get_all_by_sport = (req, res, next) => {
    const _sport = req.params.sport;
    let query = {sport:_sport}
    if(_sport === 'all'){
        query = {}
    }
    MarketInfo.find(query)
        .exec()
        .then(docs => {
            const response = [
                docs
                .filter(x => x.name.indexOf('/')===-1)
                .map(doc => {
                    return {
                        _id: doc._id,
                        marketId: doc.marketId,
                        marketType: doc.marketType,
                        marketInfo: doc.marketInfo,
                    };
                })
            ];
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
};

//return market info by market id
exports.market_get_details_by_market_id = (req, res, next) => {

    const myId = req.params.marketId;

    MarketFunction.getMarketDetailsById(myId, false, null).then(
        function(value) {
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

//return market info by market id
exports.market_get_id_by_market_name_and_date = (req, res, next) => {

    let myName = req.body.name;
    let myEventName = req.body.eventName;
    const myDate = req.body.date;

    console.log(req.body)

    let marketType = myEventName
    

    // lookup for market type
    if(myName.indexOf(" - Set 1")!==-1){
        myName = myName.split(" - ")[0];
       
        marketType = "Set 1 Winner"
    } else if (myName.indexOf(" - Set 2")!==-1){
        myName = myName.split(" - ")[0];
        marketType = "Set 2 Winner"
    }


    let options = {$and:[{"marketInfo.eventName": myName},{"marketInfo.name": marketType},{"marketInfo.openDate": { $gte:myDate-126400000 , $lte: myDate+126400000 }}]}
    
    //     MarketInfo.find({$and:[{"marketInfo.eventName": myName},{"marketInfo.openDate": { $gte:myDate-10000000, $lte: myDate+10000000 }}]})
// MarketInfo.find({"marketInfo.eventName": myName})

console.log("\nSearch for market: " + myName + ", " + marketType, " : " + myDate)
MarketInfo.find(options)
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                const response = 
                    docs.map(doc => {
                        return {
                            marketId: doc.marketId,
                        };
                    })
                console.log(response[0])
                res.status(200).json(response[0]);
            } else {
                res.status(200).json({
                    marketId: "notFound"
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

//return market info by market id
exports.markets_get_info_by_market_id = (req, res, next) => {
    const myId = req.params.marketId;
    MarketInfo.find({ id: myId })
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                const response = [
                    docs.map(doc => {
                        return {
                            _id: doc._id,
                            marketId: doc.marketId,
                            marketType: doc.marketType,
                            marketInfo: doc.marketInfo,
                        };
                    })
                ];
                res.status(200).json(response.sort(function(a,b){
                    return new Date(a.openDate) - new Date(b.openDate);
                }));
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
};

//return market info by market id
exports.markets_get_runners_by_market_id = (req, res, next) => {
    const myId = req.params.marketId;
    MarketRunners.find({ marketId: myId })
        .select("_id marketId runners")
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                const response = {
                    selections: docs.map(doc => {
                        return {
                            _id: doc._id,
                            marketId: doc.marketId,
                            marketType: doc.marketType,
                            marketRunners: doc.marketRunners,
                        };
                    })
                };
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
};

//return market info by market id
exports.markets_get_prices_by_market_id = (req, res, next) => {
    const myId = req.params.marketId;
    MarketOdds.find({ marketId: myId })
        .select("_id marketId odds")
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                const response = {
                    prices: docs.map(doc => {
                        return {
                            _id: doc._id,
                            marketId: doc.marketId,
                            marketType: doc.marketType,
                            marketOdds: doc.marketOdds,
                        };
                    })
                };
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
};

//return market info by market id
exports.markets_get_updates_by_market_id = (req, res, next) => {
    const myId = req.params.marketId;
    MarketUpdates.find({ marketId: myId })
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                const response = {
                    updates: docs.map(doc => {
                        return {
                            marketId: doc.marketId,
                            updates: doc.updates,
                            _id: doc._id,
                        };
                    })
                };
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
};

//return array of markets id in the same match (over, under, correct score for football)
exports.markets_get_same_match_markets = (req, res, next) => {

    const myId = req.params.marketId;

    const nameQuery = MarketInfo.findOne({ 'id': myId });
    nameQuery.select('marketId name marketType openDate');

    nameQuery.exec(function (err, market) {
        if (err) {
            res.status(500).json({
                message: "Error in Db"
            })
        } else {


            if(market!= null){
                let date = market.openDate.split(" ")[0]
                let datereg = '/^' + date + '/'
                const marketQuery = MarketInfo.find({name: market.name}, {openDate: { $regex:datereg }});
                marketQuery.select('_id id eventName marketType openDate name sport winner delay');
                marketQuery.exec(function (err, subMarket) {
                    if (err) {
                        res.status(500).json({
                            message: "Error in Db"
                        })
                    } else {
                        res.status(200).json(subMarket.filter(x=> {
                            return x.id !== myId
                        }))
                    }
                });

            } else {
                res.status(200).json({
                    message: "marketId not found"
                })
            }
        }
    });

};

exports.markets_by_runner_id = async(req, res, next) => {

    let marketToFind = []
    let markResponse = []
    let runnerId = parseInt(req.params.runnerId);

    // find selection
    const selectionsData = await MarketRunners
        .find({ 'marketRunners.id': runnerId })
        .exec()

    if(selectionsData.length){
        // push market id to find in array
        selectionsData.map(selections => {
            marketToFind.push(selections.marketId)
        })

        // get market id in array info
        const marketData = await MarketInfo
            .find({marketId: { $in: marketToFind }})
            .exec()
        // generate the response

        for(let i=0;i<marketData.length;i++){
            let info = marketData[i].marketInfo

            if(info.winner.id){
                // find selection in previous search
                const selectionsOfMarket = findRunnersByMaketId(selectionsData, marketData[i].marketId)
                if(selectionsOfMarket){
                    let winnerIndex = ( +info.winner.id === selectionsOfMarket.marketRunners[0].id ? 0 : 1)
                    let loserIndex = ( winnerIndex === 0 ? 1 : 0)

                    let selectionIndex =  ( +runnerId === selectionsOfMarket.marketRunners[0].id ? 0 : 1)
    
                    markResponse.push({
                        marketId: marketData[i].marketId,
                        eventName: info.eventName,
                        marketType: info.marketType,
                        openDate: info.openDate,
                        sport: info.sport,
                        selectionWin: +info.winner.id === runnerId,
                        selection: {
                            id: selectionsOfMarket.marketRunners[selectionIndex].id,
                            name: selectionsOfMarket.marketRunners[selectionIndex].name,
                            status: selectionsOfMarket.marketRunners[selectionIndex].status,
                            bsp:selectionsOfMarket.marketRunners[selectionIndex].inPlayOdds,
                            maxInPlay: selectionsOfMarket.marketRunners[selectionIndex].maxInPlay,
                            minInPlay: selectionsOfMarket.marketRunners[selectionIndex].minInPlay,
                        },
                        winner: {
                            id: selectionsOfMarket.marketRunners[winnerIndex].id,
                            name: selectionsOfMarket.marketRunners[winnerIndex].name,
                            status: selectionsOfMarket.marketRunners[winnerIndex].status,
                            bsp:selectionsOfMarket.marketRunners[winnerIndex].inPlayOdds,
                            maxInPlay: selectionsOfMarket.marketRunners[winnerIndex].maxInPlay,
                            minInPlay: selectionsOfMarket.marketRunners[winnerIndex].minInPlay,
                        },
                        loser: {
                            id: selectionsOfMarket.marketRunners[loserIndex].id,
                            name: selectionsOfMarket.marketRunners[loserIndex].name,
                            status: selectionsOfMarket.marketRunners[loserIndex].status,
                            bsp:selectionsOfMarket.marketRunners[loserIndex].inPlayOdds,
                            maxInPlay: selectionsOfMarket.marketRunners[loserIndex].maxInPlay,
                            minInPlay: selectionsOfMarket.marketRunners[loserIndex].minInPlay,
                        },
                        _id: marketData[i]._id,
                    })
                }
            }
        }
        markResponse.sort(function(a,b){
            return new Date(b.openDate) - new Date(a.openDate);
        });
        res.status(200).json(markResponse);
    } else{
        res.status(400).json({
            message: "runnerId not found"
        })
    }

}

exports.markets_get_meta_list_tennis = async(req, res, next) => {
    console.log('Tennis metalist loading..')
    try{
        Promise.all([
            // get all information
            MarketInfo.find({"marketInfo.sport": "TENNIS"}).allowDiskUse(true),
            MarketUpdates.find().allowDiskUse(true),
            MarketRunners.find().allowDiskUse(true),
            marketAdditionalInfoTennis.find().allowDiskUse(true),
        ]).then((values) => {
            if(values[0] && values[1]  && values[2] && values[3] ){
        
                console.log('correct get meta list from db')

                // map data 
                const map = new Map();
                values[0].forEach(info => map.set(info.marketId, info));
                values[1].forEach(update => {
                    let temp = {
                        marketInfo : map.get(update.marketId),
                        marketUpdates :update
                    }
                    map.set(update.marketId, temp)
                });
                values[2].forEach(runners => {
                    let data = map.get(runners.marketId)
                    let temp = {
                        marketInfo : data.marketInfo,
                        marketUpdates : data.marketUpdates,
                        marketRunners : runners,
                        marketAdditional : null,
                    }
                    map.set(runners.marketId, temp)
                });

                values[3].forEach(additional => {
                    let data = map.get(additional.marketId)
                    if(data){
                        let temp = {
                            marketInfo : data.marketInfo,
                            marketUpdates : data.marketUpdates,
                            marketRunners : data.marketRunners,
                            marketAdditional : additional,
                        }
                        map.set(additional.marketId, temp)
                    }
                   
                });

                console.log('.. end mapping data')

                // merge map in array and fix the value marketAdditionalInfo
                const mergedArr = Array.from(map.values(), x =>{
                    let temp = null
                    if(x.marketAdditional){
                        temp = {
                            marketInfo:x.marketInfo,
                            marketUpdates: x.marketUpdates,
                            marketRunners: x.marketRunners,
                            marketAdditionalInfo: x.marketAdditional,
                        }
                    } else{
                        temp = {
                            marketInfo:x.marketInfo,
                            marketUpdates: x.marketUpdates,
                            marketRunners: x.marketRunners,
                            marketAdditionalInfo: null
                        }
                    }
                    // check for last uploaded market that not have complete data
                    if(temp.marketInfo && temp.marketUpdates && temp.marketRunners){
                        return temp
                    }
                    
                });

                console.log('.. end merge, ready to send resp')
                console.log('Found ' + mergedArr.length + ' market.')

                res.status(200).json(mergedArr);
            } else{
                res.status(400).json('error');
            }
        });
    } catch (err){
        console.log(err)
        res.status(400).json('error');
    }

}

exports.markets_get_meta_list_soccer = async(req, res, next) => {
    console.log('Soccer metalist loading..')
    try{
        Promise.all([
            // get all information
            MarketInfo.find({"marketInfo.sport": "SOCCER"}).allowDiskUse(true),
            MarketUpdates.find().allowDiskUse(true),
            MarketRunners.find().allowDiskUse(true),
            marketAdditionalInfoTennis.find().allowDiskUse(true),
        ]).then((values) => {
            if(values[0] && values[1]  && values[2] && values[3] ){
        
                console.log('correct get meta list from db')

                // map data 
                const map = new Map();
                values[0].forEach(info => map.set(info.marketId, info));
                values[1].forEach(update => {
                    let temp = {
                        marketInfo : map.get(update.marketId),
                        marketUpdates :update
                    }
                    map.set(update.marketId, temp)
                });
                values[2].forEach(runners => {
                    let data = map.get(runners.marketId)
                    let temp = {
                        marketInfo : data.marketInfo,
                        marketUpdates : data.marketUpdates,
                        marketRunners : runners,
                        marketAdditional : null,
                    }
                    map.set(runners.marketId, temp)
                });

                values[3].forEach(additional => {
                    let data = map.get(additional.marketId)
                    if(data){
                        let temp = {
                            marketInfo : data.marketInfo,
                            marketUpdates : data.marketUpdates,
                            marketRunners : data.marketRunners,
                            marketAdditional : additional,
                        }
                        map.set(additional.marketId, temp)
                    }
                   
                });

                console.log('.. end mapping data')

                // merge map in array and fix the value marketAdditionalInfo
                const mergedArr = Array.from(map.values(), x =>{
                    let temp = null
                    if(x.marketAdditional){
                        temp = {
                            marketInfo:x.marketInfo,
                            marketUpdates: x.marketUpdates,
                            marketRunners: x.marketRunners,
                            marketAdditionalInfo: x.marketAdditional,
                        }
                    } else{
                        temp = {
                            marketInfo:x.marketInfo,
                            marketUpdates: x.marketUpdates,
                            marketRunners: x.marketRunners,
                            marketAdditionalInfo: null
                        }
                    }
                    // check for last uploaded market that not have complete data
                    if(temp.marketInfo && temp.marketUpdates && temp.marketRunners){
                        return temp
                    }
                    
                });

                console.log('.. end merge, ready to send resp')
                console.log('Found ' + mergedArr.length + ' market.')


                res.status(200).json(mergedArr);
            } else{
                res.status(400).json('error');
            }
        });
    } catch (err){
        console.log(err)
        res.status(400).json('error');
    }

}

exports.remove = async(req, res, next) => {
    let duplicates = [];

    const market = await MarketInfo.ensureIndexes([{marketId: 1, nodes: 1}, {unique: true, dropDups: true}]).then()
}

function findRunnersByMaketId(selections, marketId){
    for(let i=0;i< selections.length;i++){
        if(selections[i].marketId === marketId){
            return selections[i]
        }
    }
    return null
}


  
