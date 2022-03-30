const Runners = require("../models/runners");
let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise

//return all match
exports.runners_get_all = (req, res, next) => {
    Runners.find()
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        id: doc.id,
                        name: doc.name,
                        stats: doc.stats,
                        note: doc.note,
                        sport: doc.sport,
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

//return all match
exports.runners_get_by_id = (req, res, next) => {
    const myId = req.params.marketId;
    Runners.find({id: myId})
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        id: doc.id,
                        name: doc.name,
                        sport: doc.sport,
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

//return all match
exports.runners_check_by_id = (myId, myRunner) => {
    Runners.findOne({id: myId})
        .exec()
        .then(docs => {
           if(docs===null){
            let runner = new Runners({
                _id: new mongoose.Types.ObjectId(),
                id: myId,
                name: myRunner.name,
                sport: myRunner.sport,
            });
            runner
                .save()
                .then(result => {
                    console.log(result)
                    return false
                })
                .catch(err => {
                    console.log("ERROR:\n" + err);
                    res.status(500).json(JSON.stringify({
                        error: err
                    }));
                })
              
           }
        })
};

//return all match
exports.update_runner_db = (req, res, next) => {

    let json = require('../../../backUpv1/runners.json')

    let at = []

    for(let i in json.runner)
        at.push(json.runner[i]);

    at.forEach(element => {
        if(this.runners_check_by_id(element.id, element)){
            console.log("present")
        } else {
           //console.log("not present")
        }
    });

    res.status(200).json("ok");

    
}



exports.runners_get_info_by_name = (req, res, next) => {

    let runnerName = req.body.name

    Runners.find({name: runnerName})
    .exec()
    .then(docs => {
        const response =
            docs.map(doc => {
                return {
                    id: doc.id,
                    name: doc.name,
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
}