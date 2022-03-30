const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const MarketAdvancedController = require('../controllers/market/marketAdvancedController');

// --- GET ---

//get all marketsInfo
router.get("/all", checkAuth, MarketAdvancedController.markets_get_all_market_list);

// return sub properties of match
router.get("/info/:marketId",  checkAuth, MarketAdvancedController.market_get_info_by_id);
router.get("/selections/:marketId",  checkAuth, MarketAdvancedController.market_get_runners_by_id);
router.get("/prices/:marketId",  checkAuth, MarketAdvancedController.market_get_odds_by_id);


router.get("/detail/:marketId",  checkAuth, MarketAdvancedController.market_get_details_by_id);

router.get("/metaList",  checkAuth, MarketAdvancedController.markets_get_meta_list_advanced);

router.get("/findByName/:marketName",  checkAuth, MarketAdvancedController.markets_find_market_by_name);

router.get("/present/:marketId",  checkAuth, MarketAdvancedController.market_check_present);

/*
router.get("/all/:sport",  checkAuth, MarketAdvancedController.markets_get_all_by_sport);


// return all properties of market for detail (INFO, SELECTION, MARKETUPDATE, PRICES)
router.get("/detail/:marketId",  checkAuth, MarketAdvancedController.market_get_all_by_market_id);

router.get("/selection/:marketId",  checkAuth, MarketAdvancedController.markets_get_selection_by_market_id);
router.get("/prices/:marketId",  checkAuth, MarketAdvancedController.markets_get_prices_by_market_id);
router.get("/updates/:marketId",  checkAuth, MarketAdvancedController.markets_get_updates_by_market_id);

// return id of market related to this match
router.get("/sameMatch/:marketId",  checkAuth, MarketAdvancedController.markets_get_same_match_markets);

// markets where runner is in selection runner id
router.get("/byRunner/:runnerId",  checkAuth, MarketAdvancedController.markets_by_runner_id);



 */

module.exports = router;
