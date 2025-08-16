
// Arrow Function
const func = ()=> {
    console.log("Hi Ajmal");
}

func();

const sum = (num1, num2) => {
    return num1 + num2;
}

const sum2 = (num1, num2) => num1 + num2;

console.log(sum(2,3));
console.log(sum2(5,5));

// when there is single parameter no need of using bracket
const cube = number => number*number*number;

console.log(cube(3));


// if we don't know how many arguments are coming 
const addition = function(...number) {
    return number;
}

console.log(addition(1,2,3,4,5, {1:'one'}))

// using spread operator
let arr = [1,3];
let arr2 = [...arr];
console.log(arr2);


// destructioning 

obj = {
    name: 'Ajmal',
    age: 23,
    qualification: 'B.Tech'
};

const {name} = obj;
console.log(name);


function example({name, age}) {
    console.log(name, age);
    
};

example(obj);