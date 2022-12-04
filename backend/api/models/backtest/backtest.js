const mongoose = require('mongoose');

const backtestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: {type: Number},
    updated: {type: Number},
    backtest: {
        strategyId: {type: String},
        comment: {type: String},
        name: {type: String},
        comment: {type: String},
        type: {type: String},
        bank: {type: Number},
        tradesIds: [{type: String, require: true}],
      }
    }
)

module.exports = mongoose.model('backtest', backtestSchema, 'backtest');

