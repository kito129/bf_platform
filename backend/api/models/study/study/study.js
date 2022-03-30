const mongoose = require('mongoose');

const studySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: {type: Number},
    lastUpdate: {type: Number},
    study: {
        name: {type: String},
        description: {type: String},
        strategyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Strategy' },
        element: {
            baskets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Basket' },],
            entry: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Strategy' },],
            trades: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyTrades' }
        },
        options:{
            stake:  {type: Number},
            basketInAnd:  {type: Boolean},
            entryInAnd: {type: Boolean},
        }
    }

})

module.exports = mongoose.model('Study', studySchema, 'study');
