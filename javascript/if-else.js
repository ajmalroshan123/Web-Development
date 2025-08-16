
let age = 18;

if (age < 18) {
    console.log("Not Eligiable");
    
}
else if (age > 45) {
    console.log("Over age");
    
}
else {
    console.log("perfect");
    
}

// Multiple Condition : Switch

switch(new Date().getDay()) {
    case 0:
        console.log('Today is Monday');
        break;
    case 1:
        console.log('Today is Tuesday');
        break;
}


// Global Scope, Local Scope (Functional Scope ), Blocked Scope

// if (true) {
//     var a = 10;
//     let b = 20;
//     let c = 30;
// }

// // console.log(a);
// // console.log(b);
// console.log(c); 


greet(); // it will call it 

function greet() {
    console.log("HI Guys");
    
}

meet(); // it will not call it , shows error

const meet = function () {
    console.log("Hi Could we meet");
    
}