const checkAuth = require('../middleware/check-auth');
const express = require("express");
const router = express.Router();


const TennisTournamentController = require('../controllers/tennisTournamentController');
// --- GET ---

//get all marketsInfo
router.get("/all", checkAuth,  TennisTournamentController.get_all_tennis_tournament);
router.get("/detail/:id", checkAuth,  TennisTournamentController.get_tennis_tournament_by_id);

router.put("/create", checkAuth,  TennisTournamentController.create_tennis_tournament);
router.post("/:tennisTournamentId", checkAuth, TennisTournamentController.update_tennis_tournament_by_id);
router.delete("/:tennisTournamentId",  checkAuth, TennisTournamentController.delete_tennis_tournament_by_id);


module.exports = router;
