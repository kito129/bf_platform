const mongoose = require('mongoose');

const runnerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: { type: Number, required: true },
    name: { type: String, required: true },
    sport: { type: String, required: true },

});

module.exports = mongoose.model('Runners', runnerSchema, 'runners');
