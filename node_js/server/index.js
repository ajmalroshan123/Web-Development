const http = require("http");
const fs = require("fs");
const express = require("express");

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

app.get("/", (req, res) => {
    return res.send("Welcome to the homepage");
})

app.get("/about", (req, res) => {
    const name = req.query.name;
    return res.send("Welcome to the about page " + (name?name:""));
})

app.listen("3000", () => console.log("Server is listening on port 3000"));