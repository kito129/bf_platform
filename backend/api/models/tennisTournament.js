const mongoose = require('mongoose');

const tennisTournamentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: { type: Number, required: true },
    lastUpdate: { type: Number, required: true },
    tournament: {
        detail: {
            name: { type: String},
            openDate: { type: Number},
            surface: { type: String},
            type: {
                federation: { type: String},
                point: { type: Number},
                isSlam: { type: Boolean},
                isChallenger: { type: Boolean},
            },
            qualifying: { type: Number},
            draw: { type: Number},
        },
        stats: {
            final: {
                winner: {
                    name: { type: String},
                    id: { type: Number, },
                },
                runnerUp: {
                    name: { type: String },
                    id: { type: Number},
                },
                semifinalist: [{
                    name: { type: String },
                    id: { type: Number},
                }],
                participants: [{
                    name: { type: String },
                    id: { type: Number },
                }]
            }
        }
    }

});

module.exports = mongoose.model('TennisTournament', tennisTournamentSchema, 'tennisTournament');
