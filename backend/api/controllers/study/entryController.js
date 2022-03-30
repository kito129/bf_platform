let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise

const Entry = require("../../models/study/entry/entry")


// return all entries
exports.get_all_entries = (req, res, next) => {
    Entry.find()
        .select("_id created lastUpdate entry")
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        entry: doc.entry,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response.sort(function(a,b){
                    return a.entry.created - b.entry.created;
                }));
            } else {
                res.status(404).json({
                    message: 'No entry found in DB'
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
exports.create_entry = (req, res, next) => {
    let created;
    let entry = new Entry({
        _id: new mongoose.Types.ObjectId(),
        created: req.body.created,
        lastUpdate: req.body.lastUpdate,
        entry: req.body.entry,
    });
    entry
        .save()
        .then(result => {
            created =  {
                _id: result._id,
                created: result.created,
                lastUpdate: result.lastUpdate,
                entry: result.entry,
            }
            res.status(200).json(created);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json(JSON.stringify({
                error: err
            }));
        })
};

// update entry
exports.update_entry_by_id = (req, res, next) => {
    const myId = req.params.entryId;
    let updated
    Entry.findOneAndUpdate({_id: myId},req.body,  { new: true})
        .select("_id created lastUpdate entry")
        .exec()
        .then(docs => {
            updated= {
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                entry: docs.entry,
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


// delete entry by _id
exports.delete_entry_by_id = (req, res, next) => {
    const myId = req.params.entryId;
    let removed
    Entry.findOneAndRemove({_id: myId})
        .exec()
        .then(docs => {
            removed = {
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                entry: docs.entry,
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


exports.getEntryById = (id) =>{
    return new Promise(function(myResolve, myReject) {
        Entry.findOne({_id: id})
            .select("_id created lastUpdate entry")
            .exec()
            .then(doc => {
                if (doc) {
                    myResolve(doc); // when successful
                } else {
                    myReject('not found');  // when error
                }
            })
            .catch(err => {
                console.log("ERROR:\n" + err);
                myReject('error');  // when error
            });
    })
}

