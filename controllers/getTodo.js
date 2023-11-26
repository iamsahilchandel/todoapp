const Todo = require("../models/Todo");

exports.getTodo = async(req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({success: true, data: todos, message: "Entire todo data is fetched!"});
    } catch(err) {
        console.error(err);
        res.status(500).json({success: false, response: "Request Failed", message: err.message});
    }
}

exports.getTodoById = async(request, response) => {
    try {
        const id = request.params.id;
        const todos = await Todo.findById({_id: id});

        if(!todos) {
            response.status(404).json({success: false, data: todos, message: `Given ID: ${id} data not found!`});
        }

        response.status(200).json({success: true, data: todos, message: `Data found for given id: ${id}`});
    } catch(err) {
        response.status(500).json({success: false, response: "Request Failed", message: err.message});
    }
}