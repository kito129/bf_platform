let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise
const TennisTournament = require("../models/tennisTournament")

exports.get_all_tennis_tournament = (req, res, next) => {
    TennisTournament.find()
        .select("_id created lastUpdate tournament")
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        tournament: doc.tournament,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message: 'No tennis tournament in db'
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


exports.get_tennis_tournament_by_id = (req, res, next) => {
    const myId = req.params.marketId;
    TennisTournament.find({id: myId})
        .select("_id created lastUpdate tournament")
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        id: doc.id,
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        tournament: doc.tournament,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message: 'No entries found'
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


// add tennis tournament in DB
exports.create_tennis_tournament = (req, res, next) => {
    let createdTennisTournament;
    let tennisTournament = new TennisTournament({
        _id: new mongoose.Types.ObjectId(),
        created: req.body.created,
        lastUpdate: req.body.lastUpdate,
        tournament: req.body.tournament,
    });
    tennisTournament
        .save()
        .then(result => {
            createdTennisTournament =  {
                _id: result._id,
                created: result.created,
                lastUpdate: result.lastUpdate,
                tournament: result.tournament,
            }
            res.status(200).json(createdTennisTournament);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json(JSON.stringify({
                error: err
            }));
        })
};

// update runner note by runner id and runner note
exports.update_tennis_tournament_by_id = (req, res, next) => {
    const myId = req.params.tennisTournamentId;
    let updated
    TennisTournament.findOneAndUpdate({_id: myId},req.body, { new: true})
        .select("_id created lastUpdate tournament")
        .exec()
        .then(docs => {
            updated =  {
                _id: docs._id,
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                tournament: docs.tournament,
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
exports.delete_tennis_tournament_by_id = (req, res, next) => {
    const myId = req.params.tennisTournamentId;
    let removed
    console.log(myId)
    TennisTournament.findOneAndRemove({_id: myId})
        .exec()
        .then(docs => {
            removed = {
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                tournament: docs.tournament,
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


