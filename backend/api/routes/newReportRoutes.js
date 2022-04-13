const newReportController = require('../controllers/newReportController');
const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');


// --- GET ---
//get all marketsInfo
router.get("/newTrade/all", checkAuth,  newReportController.get_all_new_trades);


router.get("/updateStrategy",  newReportController.update_new_strategy);

router.get("/delete2022Trade",  newReportController.delete_2022_trade);
router.get("/delete2021Trade",  newReportController.delete_2022_trade);

/*
router.put("/newTrade/create", checkAuth,  ReportController.create_trade);
router.post("/newTrade/:tradeId", checkAuth,  ReportController.update_trade_by_id);
router.delete("/newTrade/:tradeId", checkAuth,  ReportController.delete_trade_by_id);

router.get("/newStrategy/all", checkAuth,  ReportController.get_all_strategy);
router.put("/newStrategy/create", checkAuth,  ReportController.create_strategy);
router.post("/newStrategy/:strategyId", checkAuth,  ReportController.update_strategy_by_id);
router.delete("/newStrategy/:strategyId", checkAuth,  ReportController.delete_strategy_by_id);

router.post("/strategyInfoByName", ReportController.strategy_get_info_by_name);


router.get("/trade/fix", checkAuth,  ReportController.fix_trades_schema);
*/


module.exports = router;