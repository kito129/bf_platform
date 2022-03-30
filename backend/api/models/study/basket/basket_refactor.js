const mongoose = require('mongoose');

const basketSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: {type: Number},
    lastUpdate: {type: Number},
    basket: {
        name: {type: String},
        description: {type: String},
        sport: {type: String},
        activeFilter: [{
            id: {type: Number},
            name: {type: String},
            props: {
                odds: {
                    min: {type: Number},
                    max: {type: Number},
                    isEquals: {type: Boolean},
                },
                marketsNumber: {type: Number},
            }
        }],
        playersFilter: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Players' }],
        options:{
            tennis:{
                notDoubles: {type: Boolean},
                delay3SecOnly: {type: Boolean},
                oddsLimit: {type: Number},
            }
        },
        size: {type: Number},
        relativeMarkets: { type: mongoose.Schema.Types.ObjectId, ref: 'RelativeMarketBasket' }
    }
})


module.exports = mongoose.model('Basket', basketSchema, 'basket');
