const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: { type: Number},
    lastUpdate: { type: Number},
    note: {
        description: { type: String},
        type: { type: String},
        tournament: { type: String},
        tournamentId: { type: String},
        phase: { type: String},
        selection: {
            runnerA: {
                name: { type: String},
                id: { type: Number},
                bsp: { type: Number},
                odds: { type: Number},
            },
            runnerB: {
                name: { type: String},
                id: { type: Number},
                bsp: { type: Number},
                odds: { type: Number},
            },
            injuredId: { type: Number, required: true },
        },
        detailType: {
            isInPlay: { type: Boolean},
            recall: { type: Boolean},
            isNotInPause: { type: Boolean},
        },
        tennisPoints: {
            set1: {
                runnerA: { type: Number},
                runnerB: { type: Number},
            },
            set2: {
                runnerA: { type: Number},
                runnerB: { type: Number},
            },
            set3: {
                runnerA: { type: Number},
                runnerB: { type: Number},
            },
            set4: {
                runnerA: { type: Number},
                runnerB: { type: Number},
            },
            set5: {
                runnerA: { type: Number},
                runnerB: { type: Number},
            },
            currentGame: {
                runnerA: { type: String},
                runnerB: { type: String},
                server: { type: String},
            }
        },
        validation: {
            validationNote: { type: String},
            isValidated: { type: Boolean},
            tennisPoints: {
                set1: {
                    runnerA: { type: Number},
                    runnerB: { type: Number},
                },
                set2: {
                    runnerA: { type: Number},
                    runnerB: { type: Number},
                },
                set3: {
                    runnerA: { type: Number},
                    runnerB: { type: Number},
                },
                set4: {
                    runnerA: { type: Number},
                    runnerB: { type: Number},
                },
                set5: {
                    runnerA: { type: Number},
                    runnerB: { type: Number},
                },
                currentGame: {
                    runnerA: { type: String},
                    runnerB: { type: String},
                    server: { type: String},
                }
            },
            detailValidation: {
                win: {type: Boolean},
                lose: {type: Boolean},
                retired: {type: Boolean},
            }
        }
    },

});

module.exports = mongoose.model('Notes', noteSchema, 'notes');

