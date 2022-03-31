const ReportController = require('../controllers/reportController');
const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
// --- GET ---

//get all marketsInfo
router.get("/trade/all", checkAuth,  ReportController.get_all_trades);
router.put("/trade/create", checkAuth,  ReportController.create_trade);
router.post("/trade/:tradeId", checkAuth,  ReportController.update_trade_by_id);
router.delete("/trade/:tradeId", checkAuth,  ReportController.delete_trade_by_id);

router.get("/strategy/all", checkAuth,  ReportController.get_all_strategy);
router.put("/strategy/create", checkAuth,  ReportController.create_strategy);
router.post("/strategy/:strategyId", checkAuth,  ReportController.update_strategy_by_id);
router.delete("/strategy/:strategyId", checkAuth,  ReportController.delete_strategy_by_id);

router.post("/strategyInfoByName", ReportController.strategy_get_info_by_name);


router.get("/trade/fix",  ReportController.fix_trades_schema);


module.exports = router;
