const express = require('express');
const router = express.Router();
const main = require("../controllers/MainController");

// rout to home page
router.get('/', main.home);

module.exports = router;
