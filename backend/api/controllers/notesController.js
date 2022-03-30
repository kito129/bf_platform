let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise
const Notes = require("../models/notes")


// return all notes
exports.get_all_notes = (req, res, next) => {
    Notes.find()
        .select("_id created lastUpdate note")
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        note: doc.note,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response.sort(function(a,b){
                    return a.note.created - b.note.created;
                }));
            } else {
                res.status(404).json({
                    message: 'No notes found in DB'
                });
            }
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        });
};


// create note
exports.create_note = (req, res, next) => {
    let createdNote;
    let runnerNote = new Notes({
        _id: new mongoose.Types.ObjectId(),
        created: req.body.created,
        lastUpdate: req.body.lastUpdate,
        note: req.body.note,
    });
    runnerNote
        .save()
        .then(result => {
            createdNote =  {
                _id: result._id,
                created: result.created,
                lastUpdate: result.lastUpdate,
                note: result.note,
            }
            res.status(200).json(createdNote);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json(JSON.stringify({
                error: err
            }));
        })
};

// update notes
exports.update_note_by_id = (req, res, next) => {
    const myId = req.params.noteId;
    let updated
    Notes.findOneAndUpdate({_id: myId},req.body,  { new: true})
        .select("_id created lastUpdate note")
        .exec()
        .then(docs => {
            updated= {
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                note: docs.note,
                _id: docs._id,
            }
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })

};


// delete runner note by note _id
exports.delete_note_by_id = (req, res, next) => {
    const myId = req.params.noteId;
    let removed
    Notes.findOneAndRemove({_id: myId})
        .exec()
        .then(docs => {
            removed = {
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                note: docs.note,
                _id: docs._id,
            }
            res.status(200).json(removed);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })
};
