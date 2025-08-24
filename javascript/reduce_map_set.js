//
const arr = [10,20,30,40,50];

const result = arr.reduce((acc, curr) => {
    acc = acc+curr;
    return acc;
},0);

console.log(result);

let fruits = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
//  final result ek object ke form
// orange:3
// apple:2
// acc = {
// orange:2,
// apple:2,
// banana:1}

const result_2 = fruits.reduce((acc, cur) => {
    if(acc.hasOwnProperty(cur))
        acc[cur]++;
    else 
        acc[cur] = 1;
    return acc;
}, {orange: 1})



console.log(result_2);


// set

let set1 = new Set([10,10,20,30])
console.log(set1);

const set2 = new Set()
set2.add(4);
set2.add(6);
set2.add(4);
set2.add("ajmal")

set2.delete(4);
console.log(set2);

const user_ids = new Set(["rohit_negi9","Mohi_91","ravi.93","chavi_90","sumit._90"]);
let new_user = "rohit_negi9";
console.log(user_ids.has(new_user), "size of set ->", user_ids.size);

user_ids.clear();
console.log(user_ids);


// convert the values in array to set and then to array
let array_values = [10,20,30,20,10,30,40,50,60,70];
let nonDuplicateValues = new Set(array_values);
console.log(nonDuplicateValues);

array_values = [...nonDuplicateValues]
console.log(array_values);


let set4 = new Set([10,20,30,40]);
let set5 = new Set([10,20,50,60]);

// intersection
// filters : Array
const result_3 = [...set4].filter((num) => set5.has(num))
console.log(result_3);

// iteration
for(let value of set2)
    console.log(value);
    

set5.forEach(element => {
    console.log(element);
    
});

// MAP
//  map in javascript stores element in key value pair
const map1 = new Map();
map1.set(1, 10);
map1.set("ajmal", 100);

console.log(map1);

map1.set(1, 20);
console.log(map1);

