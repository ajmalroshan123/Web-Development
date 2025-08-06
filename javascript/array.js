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

// shift() -> deletes the first element
arr.shift()
console.log(arr);


// includes() and indexOf()

console.log(arr.indexOf(3)); // prints the first index of the number
console.log(arr.includes(10)); // return True if it exists else False


// splice() and slice()

console.log(arr.slice(2,5));
// console.log(arr.splice(2,4)); // it will cutoff the section from 2 index to 4 length elements
// splice(starting_index, total_elemets_to_delete, add_value) 
console.log(arr.splice(2, 3, 40, 50, 60));

console.log(arr, "this ");


// Convert to String
console.log(arr.toString());
console.log(arr.join("-")); // this will also convert it to string but gives ability to join the join the element in the array


// concat array
arr3 = [1,2,3,4,5];
arr4 = [6,7,8,9,10];
arr5 = arr3.concat(arr4);   // this will convert it into one array
console.log(arr5);


arr3.push(arr4);  // this will the array itself so it will create a array inside an array
console.log(arr3);

// convert 2D to 1D Array
twoD_array = [[1,2,3], [4,5,6], [7,8,9]];
oneD_array = twoD_array.flat(); // convert 2D to 1D 
console.log(oneD_array);

// flat(value) :=  value -> 1 for 1D, 2 for 2D .. , Infinity for any level of array



// To ensure is this an Array
console.log(Array.isArray(arr3));  // prints True or False

let abc = new Array(1,2,3)
console.log(abc);

// if new Array(value) := value is single element then it defines the size of array else multiple elements then array is created.





