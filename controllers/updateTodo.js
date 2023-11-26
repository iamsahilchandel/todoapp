const Todo = require("../models/Todo");

exports.updateTodo = async(req, res) => {
    try {
        
    } catch(err) {
        console.error(err);
        res.status(500).json({success: false, response: "Request Failed", message: err.message});
    }
}