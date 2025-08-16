// for in loop : Isko array ke sath nahi lete

// Array is Object 

arr = [10,20,30,40,50];
arr.name = "Ajmal";

for(let key in arr) {
    console.log(key, "->", arr[key]);
    
}

for(let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
    
}