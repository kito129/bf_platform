const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const MarketController = require('../controllers/marketController');
const FilterBasketController = require("../controllers/filterBasketController");

// --- GET ---

//get all marketsInfo
router.get("/all", checkAuth, MarketController.markets_get_all);
router.get("/marketCount", checkAuth, MarketController.markets_get_counts);
router.get("/all/:sport",  checkAuth, MarketController.markets_get_all_by_sport);


// return all properties of market for detail (INFO, SELECTION, MARKETUPDATE, PRICES)
router.get("/detail/:marketId",  checkAuth, MarketController.market_get_details_by_market_id);

router.post("/marketIdByNameAndDate/",  checkAuth, MarketController.market_get_id_by_market_name_and_date);

// return sub properties of match
router.get("/info/:marketId",  checkAuth, MarketController.markets_get_info_by_market_id);
router.get("/selection/:marketId",  checkAuth, MarketController.markets_get_runners_by_market_id);
router.get("/prices/:marketId",  checkAuth, MarketController.markets_get_prices_by_market_id);
router.get("/updates/:marketId",  checkAuth, MarketController.markets_get_updates_by_market_id);

// return id of market related to this match
router.get("/sameMatch/:marketId",  checkAuth, MarketController.markets_get_same_match_markets);

// markets where runner is in selection runner id
router.get("/byRunner/:runnerId",  checkAuth, MarketController.markets_by_runner_id);

// return metalist by sport
router.get("/metaList/tennis",  checkAuth, MarketController.markets_get_meta_list_tennis);
router.get("/metaList/soccer",  checkAuth, MarketController.markets_get_meta_list_soccer);



// market filter basket
// --- GET ---
router.get("/filterBasket/getAll", checkAuth,  FilterBasketController.get_all_filter_basket);

// --- PUT ---
router.put("/filterBasket/create", checkAuth,  FilterBasketController.create_filter_basket);

// --- POST ---
router.post("/filterBasket/update/:filterBasketId", checkAuth,  FilterBasketController.update_filter_basket_by_id);

// --- DELETE ---
router.delete("/filterBasket/delete/:filterBasketId", checkAuth,  FilterBasketController.delete_filter_basket_by_id);



module.exports = router;
