const mongoose = require('mongoose');

const relativeMarketBasketSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    markets: [
        {
            marketId: {type: String},
            marketInfo: {
                id: { type: String },
                eventId: { type: String },
                eventName: { type: String },
                marketType: { type: String },
                openDate: { type: String },
                name: { type: String },
                sport: { type: String },
                winner: {
                    id: { type: Number },
                    name: { type: String },
                    status: { type: String },
                    position: { type: Number },

                },
                delay: {
                    inPlayDelay: {type: Number},
                    suspendedDelay: {type: Number}
                }
            },
            selection: {
                id: {type: Number},
                name: {type: String},
                inPlayOdds: {type: Number},
                inPlayIndex: {type: Number},
                lengthOddsInPlay: {type: Number},
            }
        }
    ]

})

module.exports = mongoose.model('RelativeMarketBasket', relativeMarketBasketSchema, 'relativeMarketBasket');
