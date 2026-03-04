const express = require('express');
const mongoose  = require('mongoose');
const urlRoutes = require("./routes/url");
const {connectToMongoDb} = require("./connet")

const app = express();
const port = 8000;

app.use(express.json());

connectToMongoDb("mongodb://localhost:27017/short-url")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

app.use("/api/url", urlRoutes);

app.listen(port, ()=> console.log("Server is started on port", port));