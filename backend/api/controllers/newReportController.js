const newTrade = require("../models/report/newTrade");

const Strategy = require("../models/report/strategy");
const NewStrategy = require("../models/report/newStrategy");

let mongoose = require('mongoose');


// TRADE

// return all  new trades
exports.get_all_new_trades = (req, res, next) => {
    newTrade.find()
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

exports.update_new_strategy =  (req, res, next) => {
    Strategy.find()
        .select("_id created lastUpdate strategy")
        .exec()
        .then(docs => {
            let newList = []
            docs.forEach(element => {
                console.log(element)
                let newStrategy = new NewStrategy({
                    _id: element._id,
                    created: element.created,
                    lastUpdate: element.lastUpdate,
                    strategy: {
                        info: {
                            name: element.strategy.info.name,
                            sport: element.strategy.info.sport,
                            bank: 2000,
                            stake: 20,
                            typeOfStake: "fixed",
                            detail: {
                                description: element.strategy.info.detail.description,
                                entryDescription: element.strategy.info.detail.entryDescription,
                                exitDescription: element.strategy.info.detail.exitDescription,
                                mmDescription: element.strategy.info.detail.mmDescription,
                            }
                        },
                    }
                });
                newStrategy.save().then(result => {
                    newList.push
                })
            });
        
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        });
}