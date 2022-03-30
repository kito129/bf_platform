const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const DbManagerController = require('../controllers/dbManagerController');

// --- GET ---
router.get("/info/sports/stats", checkAuth,  DbManagerController.db_manager_get_sport_stats);
router.post("/command/updatesSports", checkAuth,  DbManagerController.db_manager_update_under_over);
router.post("/command/updatesRunnersStats", checkAuth, DbManagerController.db_manager_update_runners_stats);
router.post("/command/updatesRunnersSport", checkAuth,  DbManagerController.db_manager_update_runners_sport);

//router.get("/command/fixBasketSchema", DbManagerController.fix_basket_schema);

module.exports = router;
