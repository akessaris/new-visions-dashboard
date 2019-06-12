const express = require('express');
const router = express.Router();
const main = require("../controllers/MainController");

// route to home page
router.get('/', main.home);

//Export router
module.exports = router;
