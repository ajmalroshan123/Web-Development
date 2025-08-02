 const arr = [1,2,3,4,"ajmal", "roshan", true];
 console.log(arr);
 console.log(arr.length);
 
//  Access element
console.log(arr[0]); // first index
console.log(arr.at(2)); // second index 
// at() accepts negative index
console.log(arr.at(-1));


// if we want to create same array but create different one
const arr2 = structuredClone(arr)
console.log(arr2);
console.log(arr2 === arr);


// insert element -> push()
arr.push(30);
arr.push(50);
console.log(arr);

// pop last element -> pop()
arr.pop();
console.log(arr);


// unshift() ,-> add element at the start
arr.unshift(10);
console.log(arr);




