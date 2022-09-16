const mongoose = require('mongoose');

const savedReportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: {type: Number},
    updated: {type: Number},
    savedReport: {
        name: {type: String},
        comment: {type: String},
        type: {type: String},
        trade: [{type: String, require: true}],
      }
    }
)

module.exports = mongoose.model('savedReport', savedReportSchema, 'savedReport');

