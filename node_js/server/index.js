const http = require("http");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");

// function myHandler(req, res) {
//     const log = `${Date.now()}: ${req.url} new request received\n`;
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch(req.url) {
//             case "/" :
//                 res.end("Welcome to the homepage");
//                 break;
//             case "/about" :
//                 res.end("Welcome to the about page");
//                 break;
//             default :
//                 res.end("404 not found");
//         } 
//     })
// }


// const server = http.createServer(app);

// server.listen("3000", () => console.log("Server is listening on port 3000"));

const app = express();

//plugin - Middleware
app.use(express.urlencoded({extended: false}));

const userSchema = new mongoose.Schema({
    fistName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model("User", userSchema);

app.use((req, res, next)=> {
    fs.appendFile("log.txt", `${Date.now()}: ${req.url} new request received\n`, (err, data) => {
        if(err) {
            console.log("Error while writing to log file", err);
        }
        next();
    })

})


app.get("/", (req, res) => {
    return res.status(200).send("Welcome to the homepage");
})

app.get("/about", (req, res) => {
    const name = req.query.name;
    return res.send("Welcome to the about page " + (name?name:""));
})

app.post("/api/users", (req, res) => {
    console.log(req.body, "testing");
    
    return res.send("User created successfully");
})

app.listen("3000", () => console.log("Server is listening on port 3000"));