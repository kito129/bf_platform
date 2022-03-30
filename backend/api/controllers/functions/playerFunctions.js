let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise
const Players = require("../../models/study/players/players")

exports.getPlayersFilters = (playersId) => {
    return new Promise(function (myResolve, myReject) {
        Players.find({_id: playersId})
            .select("_id created lastUpdate players")
            .exec()
            .then(docs => {
                const players =
                    docs.map(doc => {
                        return {
                            created: doc.created,
                            lastUpdate: doc.lastUpdate,
                            players: doc.players,
                            _id: doc._id,
                        };
                    });
                if (docs.length >= 0) {
                    myResolve(players); // when successful
                } else{
                    console.log("ERROR:\n");
                    myReject('error')
                }
            })
            .catch(err => {
                console.log("ERROR:\n" + err);
                myReject(err)
            });
    })
}
