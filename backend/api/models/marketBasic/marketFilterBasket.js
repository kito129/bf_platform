const mongoose = require('mongoose');

const marketFilterBasketSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: { type: Number},
    lastUpdate: { type: Number},
    filterBasket: {
        name: { type: String},
        filter: [{
            name: { type: String},
            min: { type: Number},
            max: { type: Number},
            and: { type: Boolean},
            or: { type: Boolean},
            type: { type: Number},
            active: { type: Boolean},
            listElement: [{ type: Number}],

        }],
        market: [{ type: String}],
        removed: [{ type: String}],
        activeFilter: { type: Number},
        marketSize: { type: Number},
        removedSize: { type: Number}
    }

});

module.exports = mongoose.model('MarketFilterBasket', marketFilterBasketSchema, 'marketFilterBasketBasic');
