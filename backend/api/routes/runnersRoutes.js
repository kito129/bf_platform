const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const RunnersController = require('../controllers/runnersController');


// --- GET ---

//get all marketsInfo
router.get("/all", checkAuth,  RunnersController.runners_get_all);
router.get("/detail/:marketId", checkAuth,  RunnersController.runners_get_by_id);


router.post("/infoByName",  RunnersController.runners_get_info_by_name);


router.get("/updateDb/", checkAuth,  RunnersController.update_runner_db);

module.exports = router;
