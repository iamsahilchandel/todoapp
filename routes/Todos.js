const express = require('express');
const router = express.Router();

//controllers
const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require('../controllers/getTodo');

//API Routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);

module.exports = router;