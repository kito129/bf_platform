const MarketAdvancedFunction = require("./marketAdvancedFunction");
const selections = require("jsonwebtoken");
const MarketInfoAdvanced = require("../../models/marketAdvanced/marketInfoAdvanced");



exports.markets_get_all_info = (req, res, next) => {
    MarketAdvancedFunction.getAllMarketInfo().then( x => {
        if(x.length){
            res.status(200).json(x);
        } else {
            res.status(404).json(x);
        }
    })
}

exports.markets_get_all_market_list = async(req, res, next) => {

    let allInfo = []
    // get all marketId in Db
    const marketIdList = await MarketAdvancedFunction.getAllMarketId()
    if(!(marketIdList.message)){
        // get all marketInfo that have marketId in list
        const marketInfoList = await MarketAdvancedFunction.getMarketsInfoByIdsArray(marketIdList)
        if(!(marketInfoList.message)){
            const marketRunners = await MarketAdvancedFunction.getMarketsRunnersByMarketIdsArray(marketIdList)
            if(!(marketRunners.message)){
                for (let i =0; i<marketInfoList.length;i++){
                    // generate market Advanced response
                    let currentMarket = marketInfoList[i].marketInfo
                    const response = {
                        _id: marketInfoList[i]._id,
                        marketId: marketInfoList[i].marketId,
                        marketType: marketInfoList[i].marketType,
                        marketInfo: {
                            marketId: marketInfoList[i].marketId,
                            marketType:  currentMarket.marketType,
                            eventName: currentMarket.eventName,
                            openDate:  currentMarket.openDate,
                            name: currentMarket.name,
                            sport:  currentMarket.sport,
                            winner: currentMarket.winner,
                            volume: {
                                total: currentMarket.volume.total,
                                preMatch: currentMarket.volume.preMatch,
                                inPlay: currentMarket.volume.inPlay,
                                preMatchPercent: currentMarket.volume.preMatch / currentMarket.volume.total,
                            },
                        }
                    }
    
                    // add selections info
                    for (const run of marketRunners[i].marketRunners) {
                        let winnerId = currentMarket.winner.id
                        if(run.id === winnerId){
                            response.marketInfo.winner = {
                                id: run.id,
                                name: run.name,
                                status: run.status,
                                BSP: run.inPlayOdds,
                                tradedVolume: run.tradedVolume,
                                maxInPlay: run.maxInPlay,
                                minInPlay: run.minInPlay
                            }
                        } else{
                            response.marketInfo.loser = {
                                id: run.id,
                                name: run.name,
                                status: run.status,
                                BSP: run.inPlayOdds,
                                tradedVolume: run.tradedVolume,
                                maxInPlay: run.maxInPlay,
                                minInPlay: run.minInPlay
                            }
                        }
                    }
                    allInfo.push(response)
                }
            } else{
                res.status(404).json(marketRunners);
            }
            res.status(200).json(allInfo);
        } else{
            res.status(404).json(marketInfoList);
        }
    } else{
        res.status(404).json(marketIdList);
    } 
}

exports.market_get_info_by_id = async(req, res, next) => {
    const marketId = req.params.marketId;
    // get market info

    const marketInfo = await MarketAdvancedFunction.getMarketInfoById(marketId)
    const marketSelections = await MarketAdvancedFunction.getMarketRunnersById(marketId)

    if(!(marketSelections.message) && !(marketInfo.message)){
         // generate market Advanced response
         const response = {
            marketId: marketInfo.marketId,
            marketType:  marketInfo.marketType,
            eventName: marketInfo.marketInfo.eventName,
            openDate:  marketInfo.marketInfo.openDate,
            sport:  marketInfo.marketInfo.sport,
            volume: {
                total:  marketInfo.marketInfo.volume.total,
                preMatch:  marketInfo.marketInfo.volume.preMatch,
                inPlay:  marketInfo.marketInfo.volume.inPlay,
            },
            _id: marketInfo._id,
            marketRunners:[]
        }

        // add selections info
        for (const run of selections.marketRunners) {
            response.marketRunners.push({
                id: run.id,
                name: run.name,
                status: run.status,
                BSP: run.inPlayOdds,
                tradedVolume: run.tradedVolume,
                maxInPlay: run.maxInPlay,
                minInPlay: run.minInPlay
            })
        }
        res.status(200).json(response);

    } else{
        res.status(404).json(marketInfo);

    }
}


exports.market_get_runners_by_id = (req, res, next) => {
    const marketId = req.params.marketId;
    MarketAdvancedFunction.getMarketRunnersById(marketId).then(x => {
        if(!(x.message)){
            res.status(200).json(x);
        } else {
            res.status(404).json(x);
        }
    })
}

exports.market_get_odds_by_id = (req, res, next) => {
    const marketId = req.params.marketId;
    MarketAdvancedFunction.getMarketOddsById(marketId).then(prices => {
        if(!(prices.message)){
            res.status(200).json(prices);
        } else {
            res.status(404).json(prices);
        }
    })
}


exports.market_get_details_by_id = async(req, res, next) => {
    const marketId = req.params.marketId;
    // get market DETAILS

    Promise.all([
        MarketAdvancedFunction.getMarketInfoById(marketId),
        MarketAdvancedFunction.getMarketRunnersById(marketId),
        MarketAdvancedFunction.getMarketUpdatesById(marketId),
        MarketAdvancedFunction.getMarketOddsById(marketId),
        MarketAdvancedFunction.getMarketAdditionalInfoById(marketId)
    ]).then((values) => {
        if(!(values[0].message) && !(values[1].message)  && !(values[2].message)  && !(values[3].message)){
            // generate market Advanced response

            const response = {
                marketId: marketId,
                marketInfo: values[0],
                marketRunners: values[1],
                marketUpdates: values[2],
                marketOdds: values[3],
                marketAdditionalInfo: values[4].message ? null : values[4][0]
            }

            res.status(200).json(response);
        } else{
            res.status(400).json(values[0]);
        }
    });



}


exports.markets_find_market_by_name = (req, res, next) => {
    const marketName = req.params.marketName;
    // get market INFO
    MarketAdvancedFunction.getMarketIdByName(marketName).then( market => {
        res.status(200).json(market);
    })
}

exports.markets_get_meta_list_advanced = async(req, res, next) => {

    try {
        const data =  await MarketInfoAdvanced.aggregate([
            {
                $lookup: {
                    from: "marketUpdatesAdvanced",       // other table name
                    localField: "marketId",   // name of MarketInfoAdvanced table field
                    foreignField: "marketId", // name of marketUpdatesAdvanced table field
                    as: "market_updates_advanced"         // alias for marketUpdatesAdvanced table
                }
            },
            {$unwind: "$market_updates_advanced"},     // $unwind used for getting data in object or for one record only
            {
                $lookup: {
                    from: "marketRunnersAdvanced",
                    localField: "marketId",
                    foreignField: "marketId",
                    as: "market_runners_advanced"
                }
            },
            {$unwind: "$market_runners_advanced"},
            // define some conditions here
            // define which fields are you want to fetch
            {
                $project: {
                    _id: 1,
                    marketType: 1,
                    marketId: 1,
                    marketInfo: 1,
                    marketUpdates: "$market_updates_advanced",
                    marketRunners: "$market_runners_advanced",
                    // role : "$user_role.role",
                }
            }
        ])
            .allowDiskUse(true)
            .exec()

        let metaList = data.map(x => {
            return{
                marketType: x.marketType,
                marketId: x.marketId,
                marketInfo: {
                    _id: x._id,
                    marketId: x.marketId,
                    marketType: x.marketType,
                    marketInfo: x.marketInfo
                },
                marketUpdates: x.marketUpdates,
                marketRunners: x.marketRunners,
                marketAdditionalInfo: null,
            }

        })

        res.status(200).json(metaList);

    } catch (err){

        console.log(err)
        res.status(400).json('error');
    }

}


exports.market_check_present = async(req, res, next) => {
    const marketId = req.params.marketId;
    const marketInfo = await MarketAdvancedFunction.getMarketInfoById(marketId)

    if(!(marketInfo.message) ){
        res.status(200).json("present");

    } else{
        res.status(200).json("notPresent");
    }
}
