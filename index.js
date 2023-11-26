const express = require('express');
require('dotenv').config();

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 9090;

//middleware to parse JSON Data
app.use(express.json());

//Default Route
app.get("/", (request, response) => {response.send("<h1>Welcome!</h1>")});

//Routes
const todoRoutes = require('./routes/Todos');
app.use("/api/v1", todoRoutes);

app.listen(SERVER_PORT, () => {
    console.log(`Server started at port: ${SERVER_PORT}`);
});

//DB Connection
const dbConnect = require('./config/Database');
dbConnect();