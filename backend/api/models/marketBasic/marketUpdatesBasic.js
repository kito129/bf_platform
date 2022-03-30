const mongoose = require('mongoose');

const marketUpdatesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    marketId: { type: String, required: true },
    marketType: { type: String, required: true },
    marketUpdates:[{
        timestamp: { type: Number, required: true },
        openDate: { type: Number, required: true },
        status: { type: String, required: true },
        betDelay: { type: Number, required: true },
        inPlay: { type: Boolean, required: true },
    }]
}
);

module.exports = mongoose.model('MarketUpdatesBasic', marketUpdatesSchema, 'marketUpdatesBasic');


