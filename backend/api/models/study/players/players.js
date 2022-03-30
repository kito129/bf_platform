const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: {type: Number},
    lastUpdate: {type: Number},
    players: {
        name: {type: String},
        description: {type: String},
        playersList: [{type: Number}],
        valid:{
            from: {type: Number},
            to: {type: Number}
        }
    }
});


module.exports = mongoose.model('Players', entrySchema, 'players');
