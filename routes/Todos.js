const express = require('express');
const router = express.Router();

//controllers
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/updateTodo')

//API Routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);

module.exports = router;