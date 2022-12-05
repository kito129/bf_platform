const ReportController = require('../controllers/reportController');
const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
// --- GET ---


// trade -- deprecated for new tarde
router.get("/trade/all", checkAuth,  ReportController.get_all_trades);
router.put("/trade/create", checkAuth,  ReportController.create_trade);
router.post("/trade/:tradeId", checkAuth,  ReportController.update_trade_by_id);
router.delete("/trade/:tradeId", checkAuth,  ReportController.delete_trade_by_id);
router.post("/trades", checkAuth,  ReportController.delete_many_trades_by_ids);
router.get("/trade/fix",  ReportController.fix_trades_schema);

// strategy
router.get("/strategy/all", checkAuth,  ReportController.get_all_strategy);
router.put("/strategy/create", checkAuth,  ReportController.create_strategy);
router.post("/strategy/:strategyId", checkAuth,  ReportController.update_strategy_by_id);
router.delete("/strategy/:strategyId", checkAuth,  ReportController.delete_strategy_by_id);
router.post("/strategyInfoByName", ReportController.strategy_get_info_by_name);

// saved report
router.get("/savedReport/all", checkAuth,  ReportController.get_all_savedReport);
router.put("/savedReport/create", checkAuth,  ReportController.create_savedReport);
router.post("/savedReport/:savedReportId", checkAuth,  ReportController.update_savedReport_by_id);
router.delete("/savedReport/:savedReportId", checkAuth,  ReportController.delete_savedReport_by_id);

// -- BACKTEST --

// backtest
router.get("/backtest/all", checkAuth,  ReportController.get_all_backtest);
router.put("/backtest/create", checkAuth,  ReportController.create_backtest);
router.post("/backtest/update/:backtestId", checkAuth,  ReportController.update_backtest);
router.delete("/backtest/delete/:backtestId", checkAuth,  ReportController.delete_backtest);

// backtest trades
router.get("/backtest/trades/all", checkAuth,  ReportController.get_all_backtest_trades);


module.exports = router;
