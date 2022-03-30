const mongoose = require('mongoose');

const marketOddsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    marketId: { type: String, required: true },
    marketType: { type: String, required: true },
    marketOdds: [{
        runnerId: { type: Number, required: true },
        odds: [{
            timestamp: { type: Number, required: true },
            ltp: { type: Number, required: true },
            tv: { type: Number, required: true },
            trd: [[{ type: Number, required: true }]],
            batb: [[{ type: Number, required: true }]],
            batl: [[{ type: Number, required: true }]],
        }]
    }]
});

module.exports = mongoose.model('MarketOdds', marketOddsSchema, 'marketOddsAdvanced');
