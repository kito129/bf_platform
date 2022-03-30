const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const BasketController = require('../controllers/study/basketController');
const EntryController = require('../controllers/study/entryController');
const StudyController = require('../controllers/study/studyController');
const PlayersController = require('../controllers/study/playersController');

// --- CRUD BASKET ---
router.get("/basket/all", checkAuth,  BasketController.get_all_baskets);
router.put("/basket/create", checkAuth,  BasketController.create_basket);
router.post("/basket/:basketId", checkAuth,  BasketController.update_basket_by_id);
router.delete("/basket/:basketId", checkAuth,  BasketController.delete_basket_by_id);

// --- CRUD ENTRY ---
router.get("/entry/all", checkAuth,  EntryController.get_all_entries);
router.put("/entry/create", checkAuth,  EntryController.create_entry);
router.post("/entry/:entryId", checkAuth,  EntryController.update_entry_by_id);
router.delete("/entry/:entryId", checkAuth,  EntryController.delete_entry_by_id);

// --- CRUD STUDY ---
router.get("/study/all", checkAuth,  StudyController.get_all_studies);
router.put("/study/create", checkAuth,  StudyController.create_study);
router.post("/study/:studyId", checkAuth,  StudyController.update_study_by_id);
router.delete("/study/:studyId", checkAuth,  StudyController.delete_study_by_id);

// --- CRUD PLAYERS ---
router.get("/players/all", checkAuth,  PlayersController.get_all_players);
router.put("/players/create", checkAuth,  PlayersController.create_players);
router.post("/players/:playersId", checkAuth,  PlayersController.update_players_by_id);
router.delete("/players/:playersId", checkAuth,  PlayersController.delete_players_by_id);

// --- API STUDY ---
// get study market detail, only 1 prices selected by selection Id
router.get("/marketStudy/:marketId/:selectionId", checkAuth,  StudyController.get_study_market_by_id);
router.get("/basket/basketMarkets/:basketId", checkAuth,  BasketController.get_basket_relative_markets_by_basket_id);
router.get("/study/trades/:studyId", checkAuth,  StudyController.get_study_trades_by_study_id);
// get studyTrade[]
router.get("/studies/trades/:studyId", checkAuth,  StudyController.get_studies_trades_by_study_id);

module.exports = router;

