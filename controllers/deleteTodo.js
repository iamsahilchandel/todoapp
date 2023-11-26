const Todo = require("../models/Todo");

exports.deleteTodo = async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete({_id: id});
        res.status(200).json({success: true, data: todo, message: "Todo deleted successfully!"});
    } catch(err) {
        res.status(500).json({success: false, response: "Request Failed", message: err.message});
    }
}