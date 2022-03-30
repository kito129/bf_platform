let mongoose = require('mongoose');
mongoose.promise = require('bluebird');
mongoose.promise = global.Promise
const Basket = require("../../models/study/basket/basket_refactor")
const RelativeBasketMarket = require("../../models/study/basket/relativeMarketsBasket")

const BasketFunctions = require("../functions/basketFunctions");


// return all baskets
exports.get_all_baskets = (req, res, next) => {
    Basket.find()
        .select("_id created lastUpdate basket")
        .exec()
        .then(docs => {
            const response =
                docs.map(doc => {
                    return {
                        created: doc.created,
                        lastUpdate: doc.lastUpdate,
                        basket: doc.basket,
                        _id: doc._id,
                    };
                });
            if (docs.length >= 0) {
                res.status(200).json(response.sort(function(a,b){
                    return a.basket.created - b.basket.created;
                }));
            } else {
                res.status(404).json({
                    message: 'No basket found in DB'
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


// create baskets
exports.create_basket = (req, res, next) => {
    let createdBasket;
    let _basket = req.body.basket
    let min = req.body.basket.activeFilter[0].props.odds.min
    let max = req.body.basket.activeFilter[0].props.odds.max
    let playerFilters = req.body.basket.playersFilter
    // filter by BSP
    BasketFunctions.filterByBspMinMax(min,max,req.body.basket.activeFilter,req.body.basket.sport,req.body.basket.options).then(
        function(markets) {
            // filter by PLAYERS
            BasketFunctions.filterPlayers(markets, playerFilters).then(
                function(marketsPlayerFiltered) {
                    //console.log(value)
                    let marketsBasket = new RelativeBasketMarket({
                        _id: new mongoose.Types.ObjectId(),
                        markets: marketsPlayerFiltered
                    });
                    let size = marketsPlayerFiltered.length
                    // save basket markets
                    marketsBasket
                        .save()
                        .then(result => {
                            let createdMarketBasket =  {
                                _id: result._id,
                                markets: result.markets
                            }

                            // set basket props and save
                            _basket.relativeMarkets =  createdMarketBasket._id
                            _basket.size = size
                            let basket = new Basket({
                                _id: new mongoose.Types.ObjectId(),
                                created: req.body.created,
                                lastUpdate: req.body.lastUpdate,
                                basket: _basket,
                            });
                            basket
                                .save()
                                .then(result => {
                                    createdBasket =  {
                                        _id: result._id,
                                        created: result.created,
                                        lastUpdate: result.lastUpdate,
                                        basket: result.basket,
                                    }
                                    res.status(200).json(createdBasket);
                                })
                                // catch craete basket
                                .catch(err => {
                                    console.log("ERROR:\n" + err);
                                    res.status(500).json(JSON.stringify({
                                        error: err
                                    }));
                                })
                            // catch relative market basket
                        })
                        .catch(err => {
                            console.log("ERROR:\n" + err);
                            res.status(500).json(JSON.stringify({
                                error: err
                            }));
                        })
                },
                function(error) {
                    console.log(error)
                    res.status(500).json(JSON.stringify({
                        error: error
                    }));
                })
        },
        function(error) {
            console.log(error)
            res.status(500).json(JSON.stringify({
                error: error
            }));
        }
    );

};

// update baskets
exports.update_basket_by_id = (req, res, next) => {
    const myId = req.params.basketId;
    let updated
    let min = req.body.basket.activeFilter[0].props.odds.min
    let max = req.body.basket.activeFilter[0].props.odds.max
    let playerFilters = req.body.basket.playersFilter
    // filter by BSP
    BasketFunctions.filterByBspMinMax(min,max,req.body.basket.activeFilter,req.body.basket.sport,req.body.basket.options).then(
        function(markets){
            // filter by PLAYERS
            BasketFunctions.filterPlayers(markets, playerFilters).then(
                function(marketsPlayerFiltered){

                    let updatedBasket = req.body
                    let relativeId = req.body.basket.relativeMarkets
                    let size = marketsPlayerFiltered.length
                    RelativeBasketMarket.findOneAndRemove({_id: relativeId})
                        .select("_id")
                        .exec()
                        .then(docs => {
                            let marketsBasket = new RelativeBasketMarket({
                                _id: new mongoose.Types.ObjectId(),
                                markets: marketsPlayerFiltered
                            });
                            marketsBasket
                                .save()
                                .then(result => {
                                    let createdMarketBasket =  {
                                        _id: result._id,
                                        markets: result.markets
                                    }
                                    // update basket
                                    updatedBasket.basket.relativeMarkets = createdMarketBasket._id
                                    updatedBasket.basket.size = size
                                    Basket.findOneAndUpdate({_id: myId},updatedBasket,  { new: true})
                                        .select("_id created lastUpdate basket")
                                        .exec()
                                        .then(docs => {
                                            updated= {
                                                created: docs.created,
                                                lastUpdate: docs.lastUpdate,
                                                basket: docs.basket,
                                                _id: docs._id,
                                            }
                                            res.status(200).json(updated);
                                        })
                                        // catch update basket with new relative
                                        .catch(err => {
                                            console.log("ERROR:\n" + err);
                                            res.status(500).json({
                                                error: err
                                            });
                                        })
                                })
                                // catch create basket market
                                .catch(err => {
                                    console.log("ERROR:\n" + err);
                                    res.status(500).json(JSON.stringify({
                                        error: err
                                    }));
                                })
                        })
                        // catch remove basket market
                        .catch(err => {
                            console.log("ERROR:\n" + err);
                            res.status(500).json(JSON.stringify({
                                error: err
                            }));
                        })

                },
                function(error) {
                    console.log(error)
                    res.status(500).json(JSON.stringify({
                        error: error
                    }));
                }
            )
        },
        function(error) {
            console.log(error)
            res.status(500).json(JSON.stringify({
                error: error
            }));
        }
    )
};

// delete basket by _id
exports.delete_basket_by_id = (req, res, next) => {
    const myId = req.params.basketId;
    let removedBasket
    let relativeBasketId = 0
    Basket.findOneAndRemove({_id: myId})
        .exec()
        .then(docs => {
            removedBasket = {
                created: docs.created,
                lastUpdate: docs.lastUpdate,
                basket: docs.basket,
                _id: docs._id,
            }
            // delete relative
            relativeBasketId = removedBasket.basket.relativeBasket
            RelativeBasketMarket.findOneAndRemove({_id: relativeBasketId})
                .exec()
                .then(doc => {

                    res.status(200).json(removedBasket);
                })
                // catch remove relative market
                .catch(err => {
                    console.log("ERROR:\n" + err);
                    res.status(500).json({
                        error: err
                    });
                })
        })
        // catch remove basket
        .catch(err => {
            console.log("ERROR:\n" + err);
            res.status(500).json({
                error: err
            });
        })
};

// get market basket
exports.get_basket_relative_markets_by_basket_id = (req, res, next) => {
    const basketId = req.params.basketId;
    BasketFunctions.getBasketMarkets(basketId).then(
        function(value) {
            // here set the data for basket
            res.status(200).json(value)
        },
        function(error) {
            console.log(error)
            res.status(500).json(JSON.stringify({
                error: error
            }))
        }
    )
};


exports.getBasketById = (id) =>{
    return new Promise(function(myResolve, myReject) {
        Basket.findOne({_id : id})
            .select("_id created lastUpdate basket")
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


