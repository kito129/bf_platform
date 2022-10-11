const NewTrade = require("../models/report/newTrade");

const Strategy = require("../models/report/strategy");
const NewStrategy = require("../models/report/newStrategy");

let mongoose = require('mongoose');


// TRADE

// return all  new trades
exports.get_all_new_trades = (req, res, next) => {
    NewTrade.find()
        .select("_id created updated trade")
        .exec()
        .then(docs => {
            if (docs.length >= 0) {
                res.status(200).json(docs.sort(function(a,b){
                    return b.trade.info.date - a.trade.info.date;
                }));
            } else {
                res.status(404).json({
                    message: 'No new trades found in DB'
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

// update notes
exports.update_newTrade_by_id = (req, res, next) => {
    const myId = req.params.tradeId;
    let updated
    NewTrade.findOneAndUpdate({_id: myId},req.body,  { new: true})
        .select("_id created updated trade")
        .exec()
        .then(docs => {
            updated= {
                created: docs.created,
                updated: docs.updated,
                trade: docs.trade,
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


exports.update_new_strategy =  (req, res, next) => {
    NewStrategy.find()
        .select("_id created lastUpdate strategy")
        .exec()
        .then(docs => {
            let newList = []
            
            docs.forEach(element => {

                let newStrategy = new Strategy({
                    _id: element._id,
                    created: element.created,
                    lastUpdate: element.lastUpdate,
                    strategy: element.strategy,
                });

                newStrategy.save().then(result => {
                    newList.push()
                })

                .catch(err => {
                    console.log("ERROR in create :\n" + err);
                    res.status(500).json({
                        error: err
                    });
                });
            });
        
        })
        .catch(err => {
            console.log("ERROR in cathc:\n" + err);
            res.status(500).json({
                error: err
            });
        });
}


exports.delete_2022_trade =  (req, res, next) => {
    NewTrade.deleteMany({"trade.info.date":{ $gte:1640991600000}})
        .select("_id created updated trade")
        .exec()
        .then(docs => {
            if (docs.length >= 0) {
                res.status(200).json(docs.length);
            } else {
                res.status(404).json({
                    message: 'No new trades found in DB'
                });
            }
        })
}


exports.delete_2021_trade =  (req, res, next) => {
    NewTrade.deleteMany({"trade.info.date":{ $lte:1640991600000}})
        .select("_id created updated trade")
        .exec()
        .then(docs => {
            if (docs.length >= 0) {
                res.status(200).json(docs.length);
            } else {
                res.status(404).json({
                    message: 'No new trades found in DB'
                });
            }
        })
}