const Todo = require("../models/Todo");

console.log('my change');

exports.createTodo = async(req, res) => {
    try {
        const {title, description} = req.body;
        const response = await Todo.create({title, description});
        res.status(200).json({success: true, response: response, message: "Entery added successfully!"});
    } catch(err) {
        console.error(err);
        res.status(500).json({success: false, response: "Request Failed", message: err.message});
    }
}