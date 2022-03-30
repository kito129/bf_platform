const MarketInfoAdvanced = require("../../models/marketAdvanced/marketInfoAdvanced");
const MarketRunnersAdvanced = require("../../models/marketAdvanced/marketRunnersAdvanced");
const MarketUpdatesAdvanced = require("../../models/marketAdvanced/marketUpdatesAdvanced");
const MarketOddsAdvanced = require("../../models/marketAdvanced/marketOddsAdvanced");
const MarketAdditionalInfo = require("../../models/marketAdditionalInfoTennis");
const mongoose = require("mongoose");


exports.getAllMarketInfo = async() =>{
    try {
        const marketInfo = await MarketInfoAdvanced.find()
            .exec();

        const response = marketInfo.map(doc => {
                return {
                    _id: doc._id,
                    marketId: doc.marketId,
                    marketType: doc.marketType,
                    marketInfo: doc.marketInfo,
                };
            })
        if (marketInfo.length >= 0) {
             return response.sort(function(a,b){
                return new Date(a.openDate) - new Date(b.openDate);
            })
        } else {
            return  {
                message: 'No marketAdvanced found'
            }
        }
    } catch (err){
        console.log(err)
        return err
    }
}

exports.getAllMarketId = async() =>{
    try {
        const marketInfo = await MarketInfoAdvanced.find()
            .exec();
        const response = marketInfo
            .map(doc => doc.marketId)
        if (marketInfo.length >= 0) {
             return response
        } else {
            return  {
                message: 'No marketAdvanced found'
            }
        }
    } catch (err){
        console.log(err)
        return err
    }
}

exports.getMarketInfoById = async(marketId) =>{
    try {
        const marketInfo = await MarketInfoAdvanced.find({marketId: marketId})
            .exec();
        if (marketInfo.length >= 0) {
            const response = marketInfo.map(doc => {
                return {
                    _id: doc._id,
                    marketId: doc.marketId,
                    marketType: doc.marketType,
                    marketInfo: doc.marketInfo,
                };
            })
            if(response.length){
                return response[0]
            } else {
                return  {
                    message: 'No market by id found'
                }
            }
        } else {
            return  {
                message: 'No market by id found'
            }
        }
    } catch (err){
        console.log(err)
        return err
    }
}


exports.getMarketsInfoByIdsArray = async(marketId) =>{
    try {
        const marketInfo = await MarketInfoAdvanced.find(
            {
                'marketId': {
                    $in: marketId
                }
            })
            .exec();

        if (marketInfo.length >= 0) {
            const response = marketInfo.map(doc => {
                return {
                    _id: doc._id,
                    marketId: doc.marketId,
                    marketType: doc.marketType,
                    marketInfo: doc.marketInfo,
                };
            })
            if(response.length){
                return response
            } else {
                return  {
                    message: 'No market by id found'
                }
            }
        } else {
            return  {
                message: 'No market by id found'
            }
        }
    } catch (err){
        console.log(err)
        return err
    }
}


exports.getMarketRunnersById = async(marketId) =>{
    try {
        const selectionsInfo = await MarketRunnersAdvanced.find({marketId: marketId})
            .exec();

        if (selectionsInfo.length >= 0) {

            const response = selectionsInfo.map(doc => {
                return {
                    _id: doc._id,
                    marketId: doc.marketId,
                    marketType: doc.marketType,
                    marketRunners: doc.marketRunners,
                };
            })
            if(response.length){
                return response[0]
            } else {
                return  {
                    message: 'No selection by marketId found'
                }
            }
        } else {
            return  {
                message: 'No selection by marketId found'
            }
        }
    } catch (err){
        console.log(err)
        return err
    }
}


exports.getMarketUpdatesById = async(marketId) =>{
    console.log('getMarketUpdatesById')
    try {
        const updatesInfo = await MarketUpdatesAdvanced.find({marketId: marketId})
            .exec();

        if (updatesInfo.length >= 0) {

            const response = updatesInfo.map(doc => {
                return {
                    _id: doc._id,
                    marketId: doc.marketId,
                    marketType: doc.marketType,
                    marketUpdates: doc.marketUpdates,
                };
            })
            if(response.length){
                return response[0]
            } else {
                return  {
                    message: 'No marketUpdates by marketId found'
                }
            }
        } else {
            return  {
                message: 'No marketUpdates by marketId found'
            }
        }
    } catch (err){
        console.log(err)
        return err
    }
}


exports.getMarketOddsById = async(marketId) =>{
    console.log('getMarketOddsById')
    try {
        const pricesInfo = await MarketOddsAdvanced.find({marketId: marketId})
            .exec();

        if (pricesInfo.length >= 0) {

            const response = pricesInfo.map(doc => {
                return {
                    _id: doc._id,
                    marketId: doc.marketId,
                    marketType: doc.marketType,
                    marketOdds: doc.marketOdds,
                };
            })
            if(response.length){
                return response[0]
            } else {
                return  {
                    message: 'No prices by marketId found'
                }
            }
        } else {
            return  {
                message: 'No prices by marketId found'
            }
        }
    } catch (err){
        console.log(err)
        return err
    }
}

exports.getMarketsRunnersByMarketIdsArray = async(marketId) =>{
    try {
        const runnersInfo = await MarketRunnersAdvanced.find({
            'marketId': {
                $in: marketId
            }
        })
            .exec();

        if (runnersInfo.length >= 0) {

            const response = runnersInfo.map(doc => {
                return {
                    _id: doc._id,
                    marketId: doc.marketId,
                    marketType: doc.marketType,
                    marketRunners: doc.marketRunners,
                };
            })
            if(response.length){
                return response
            } else {
                return  {
                    message: 'No selection by marketId found'
                }
            }
        } else {
            return  {
                message: 'No selection by marketId found'
            }
        }
    } catch (err){
        console.log(err)
        return err
    }
}


exports.getMarketAdditionalInfoById = async(marketId) =>{
    console.log('getMarketAdditionalInfoById')
    try {
        const additionalInfo = await MarketAdditionalInfo.find({marketId: marketId})
            .exec();

        if (additionalInfo.length >= 0) {
            const response = additionalInfo
            if(response){
                return response
            } else {
                return  {
                    message: 'No market Additional Info by marketId found'
                }
            }
        } else {
            return  {
                message: 'No market Additional Info by marketId found'
            }
        }
    } catch (err){
        console.log(err)
        return err
    }
}


exports.getMarketIdByName = async(marketName) =>{
    try {
        const market = await MarketInfoAdvanced.find({ $text: { $search: marketName }})
            .exec();

        if(market.length){
            const ordered = market.sort((a,b)=>{
                return new Date(b.openDate) - new Date(a.openDate);
            });
    
            return ordered.map(doc => {
                return `[${doc.name}],[${doc.openDate}],[${doc.id}]`
            })
        }
        return [`[Nothing found]`]
 
    } catch (err){
        console.log(err)
        return err
    }
}

