const mongoose = require('mongoose');

const marketInfoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    marketId: { type: String, required: true },
    marketType: { type: String, required: true },
    marketInfo: {
        id: { type: String, required: true },
        eventId: { type: String, required: true },
        eventName: { type: String, required: true },
        marketType: { type: String, required: true },
        openDate: { type: Number, required: true },
        name: { type: String, required: true },
        numberOfActiveRunner: { type: Number, required: true },
        countryCode: { type: String},
        sport: { type: String, required: true },
        venue: { type: String},
        winner: {
            id: { type: Number, required: true },
            name: { type: String, required: true },
            status: { type: String, required: true },
            position: { type: Number, required: true },
        },
        delay: { type: Number, required: true },
        metadata: {
            inPlayTime: { type: Number, required: true },
            suspendTime: { type: Number, required: true },
            inplaySuspendUpdatesNumber: { type: Number, required: true },
            closeTime: { type: Number, required: true },
            correctSuspended: { type: Boolean, required: true },
            inPlayDuration: { type: Number, required: true },
            haveAdditionalInfo: { type: Boolean, required: true },
            runnersCorrectBSP: { type: Number, required: true },
            prematchNumberOddsNumber: { type: Number, required: true },
            inplayNumberOddsNumber: { type: Number, required: true },
            inplayUpdatesNumber: { type: Number, required: true },
            inplayUpdates:[{
                timestamp: { type: Number, required: true },
                openDate: { type: Number, required: true },
                status: { type: String, required: true },
                betDelay: { type: Number, required: true },
                inPlay: { type: Boolean, required: true },
            }]
        },
        volume: {
            total: { type: Number, required: true },
            preMatch: { type: Number, required: true },
            inPlay: { type: Number, required: true },
        }
    },
});

marketInfoSchema.index({name: 'text'});

module.exports = mongoose.model('MarketAdvanced', marketInfoSchema, 'marketInfoAdvanced');
