const express = require("express");
const router = express.Router();

const LoginController = require('../controllers/loginController');

// --- GET ---
router.post("/login",  LoginController.login);

router.get("/create", LoginController.createOne);
module.exports = router;
