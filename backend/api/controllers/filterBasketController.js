let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise
const FilterBasket = require("../models/marketBasic/marketFilterBasket")


// return all Filter Basket
exports.get_all_filter_basket = (req, res, next) => {
    FilterBasket.find()
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        filterBasket: doc.filterBasket,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response.sort(function(a,b){
                    return a.lastUpdate - b.lastUpdate;
                }));
            } else {
                res.status(404).json({
                    message: 'No Filter Basket found in DB'
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


// create  filter basket
exports.create_filter_basket = (req, res, next) => {
    let createdFilterBasket;
    let filterBasket = new FilterBasket({
        _id: new mongoose.Types.ObjectId(),
        created: req.body.created,
        lastUpdate: req.body.lastUpdate,
        filterBasket: req.body.filterBasket,
    });
    filterBasket
        .save()
        .then(result => {
            console.log(result)
            createdFilterBasket =  {
                created: result.created,
                lastUpdate: result.lastUpdate,
                filterBasket: result.filterBasket,
                _id: result._id,
            }
            res.status(200).json(createdFilterBasket);
        })
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json(JSON.stringify({
                error: err
            }));
        })
};

// update  filter basket
exports.update_filter_basket_by_id = (req, res, next) => {
    const myId = req.params.filterBasketId;
    let updated
    FilterBasket.findOneAndUpdate({_id: myId},req.body,  { new: true})
        .exec()
        .then(doc => {
            updated= {
                created: doc.created,
                lastUpdate: doc.lastUpdate,
                filterBasket: doc.filterBasket,
                _id: doc._id,
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


// delete filter basket by _id
exports.delete_filter_basket_by_id = (req, res, next) => {
    const myId = req.params.filterBasketId;
    let removed
    FilterBasket.findOneAndRemove({_id: myId})
        .exec()
        .then(doc => {
            removed = {
                created: doc.created,
                lastUpdate: doc.lastUpdate,
                filterBasket: doc.filterBasket,
                _id: doc._id,
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

