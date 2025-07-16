// let num = 10;
// console.log(num);


// Primitive Data Type

// Number , String, Boolean, null, undefined, Symbol, bigint

// Number
let account_balance = 20.21;
console.log( typeof account_balance)

// String
let name = "ajmal";
console.log(typeof name);

// Boolean 
let statement = true;
console.log(typeof statement)

// undefined
let obj;
console.log(typeof obj);

// Null
let balance = null;
console.log(typeof balance);
// it will show object which is error in javascript , it is not corrected because of the legacy code written earlier

// Bigint
let number = 123456789098765432112345678900987654321n;
console.log(typeof number);



// Non Primitive DataType
// Array, Object, Functions

// Array
let arr = [10, 20, 30, "rohit"]
console.log( typeof arr)


// Object
let user = {
    name: "ajmal",
    age: 23
    }
console.log(typeof user)    

// Function
let fun = function() {
    return ("hello world")
}
console.log(fun());


// conversion
let account_number = '123321';
console.log(typeof Number(account_number))

let account = "100CSS"
console.log(Number(account));  // NaN

let num = 20;
console.log(typeof String(num));

let state = true;
console.log(typeof state);

console.log(typeof Number(state));

