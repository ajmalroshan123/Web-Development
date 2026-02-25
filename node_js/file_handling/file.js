const fs = require("fs");
const os = require("os");

console.log(os.platform());
console.log(os.cpus().length);


// synchronous file writing ..Blocking request
fs.writeFileSync("./hello.txt", "AJMAL");

// asynchronous file writing   ....Non-Blocking request
fs.writeFile("./hello2.txt", "AJMAL ROSHAN", (err) => {});


// synchronous file reading ..Blocking request
const data = fs.readFileSync("./hello.txt", "utf-8");
console.log(data);

// asynchronous file reading   ....Non-Blocking request
fs.readFile("./hello2.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
    
})