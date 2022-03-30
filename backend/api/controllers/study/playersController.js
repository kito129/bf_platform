let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise

const Players = require("../../models/study/players/players")

// return all players
exports.get_all_players = (req, res, next) => {
    Players.find()
        .select("_id created lastUpdate players")
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        players: doc.players,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response.sort(function(a,b){
                    return a.players.created - b.players.created;
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

// create players
exports.create_players = (req, res, next) => {
    let created;
    let players = new Players({
        _id: new mongoose.Types.ObjectId(),
        created: req.body.created,
        lastUpdate: req.body.lastUpdate,
        players: req.body.players,
    });
    players
        .save()
        .then(result => {
            created =  {
                _id: result._id,
                created: result.created,
                lastUpdate: result.lastUpdate,
                players: result.players,
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

// update player by id
exports.update_players_by_id = (req, res, next) => {
    const myId = req.params.playersId;
    let updated
    Players.findOneAndUpdate({_id: myId},req.body,  { new: true})
        .select("_id created lastUpdate players")
        .exec()
        .then(docs => {
            updated= {
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                players: docs.players,
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

// delete players by _id
exports.delete_players_by_id = (req, res, next) => {
    const myId = req.params.playersId;
    let removed
    Players.findOneAndRemove({_id: myId})
        .exec()
        .then(docs => {
            removed = {
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                players: docs.players,
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

