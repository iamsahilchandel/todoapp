const express = require('express');
const router = express.Router();

//controllers
const {createTodo} = require("../controllers/createTodo");

//API Routes
router.post("/createTodo", createTodo);

module.exports = router;