const NotesController = require('../controllers/notesController');
const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

// --- GET ---
router.get("/all", checkAuth,  NotesController.get_all_notes);

// --- PUT ---
router.put("/create", checkAuth,  NotesController.create_note);

// --- POST ---
router.post("/:noteId", checkAuth,  NotesController.update_note_by_id);

// --- DELETE ---
router.delete("/:noteId", checkAuth,  NotesController.delete_note_by_id);


module.exports = router;
