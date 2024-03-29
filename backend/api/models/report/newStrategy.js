const mongoose = require('mongoose');

const newStrategySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: {type: Number},
    lastUpdate: {type: Number},
    strategy: {
        info: {
            name: {type: String},
            sport: {type: String},
            year: {type: Number},
            bank: {type: Number},
            executor: {type: String},
            moneyManagement:{type: String},
            stake: {type: Number},
            typeOfStake: {type: String},
            detail: {
              description: {type: String},
              entryDescription: {type: String},
              exitDescription: {type: String},
              mmDescription: {type: String},
            }
        }
    }
})

module.exports = mongoose.model('NewStrategy', newStrategySchema, 'newStrategy');
