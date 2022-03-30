const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: {type: Number},
    lastUpdate: {type: Number},
    entry: {
        name: {type: String},
        description: {type: String},
        options: {
            isFirstOccurrence: {type: Boolean},
            timeToEntry: {type: Number},
        },
        bets: [
            {
                id: {type: Number},
                entry: {
                    isBack: {type: Boolean},
                    isUp: {type: Boolean},
                    odds: {type: Number},
                    stake: {type: Number},
                    bank: {type: Number},
                    liability: {type: Number},
                    timeLimit: {type: Number},
                    marginTicks: {type: Number},
                },
                haveProfit: {type: Boolean},
                haveLoss: {type: Boolean},
                profitExit: {
                    isBack: {type: Boolean},
                    isUp: {type: Boolean},
                    odds: {type: Number},
                    stake: {type: Number},
                    bank: {type: Number},
                    liability: {type: Number},
                    timeLimit: {type: Number},
                    marginTicks: {type: Number},
                },
                lossExit: {
                    isBack: {type: Boolean},
                    isUp: {type: Boolean},
                    odds: {type: Number},
                    stake: {type: Number},
                    bank: {type: Number},
                    liability: {type: Number},
                    timeLimit: {type: Number},
                    marginTicks: {type: Number},
                }
            }
        ]
    }

})

module.exports = mongoose.model('Entry', entrySchema, 'entry');
