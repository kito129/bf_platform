const mongoose = require('mongoose');

const marketRunnersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    marketId: { type: String, required: true },
    marketType: { type: String, required: true },
    marketRunners: [{
        id: { type: Number, required: true },
        name: { type: String, required: true },
        status: { type: String, required: true },
        position: { type: Number, required: true },
        inPlayOdds: { type: Number, required: true },
        inPlayTime: { type: Number, required: true },
        avgPrematch: { type: Number, required: true },
        closedOdds: { type: Number, required: true },
        maxPrematch: { type: Number, required: true },
        minPrematch: { type: Number, required: true },
        maxInPlay: { type: Number, required: true },
        minInPlay: { type: Number, required: true },
        inPlayIndex: { type: Number, required: true },
        lengthOdds: { type: Number, required: true },
        lengthOddsPrematch: { type: Number, required: true },
        lengthOddsInPlay: { type: Number, required: true },
        inPlayOddsOver2: { type: Number, required: true },
        inPlayOddsUnder2: { type: Number, required: true },
        tradedVolume: { type: Number, required: true },
        preMatchVolume: { type: Number, required: true },
        inPlayVolume: { type: Number, required: true },
    }]
});

module.exports = mongoose.model('MarketRunnersAdvanced', marketRunnersSchema, 'marketRunnersAdvanced');
