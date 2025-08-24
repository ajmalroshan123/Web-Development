// Approach := 1
const obj = {
    name: "Ajmal",
    age: 23,
}
console.log(obj);

// Approach := 2
const obj2 = new Object();
obj2.name = "Roshan";
obj2.age = 23;
console.log(obj2);

// Approach := 3
class Car {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}

let car1 = new Car("Audio", "AU334", "black");
console.log(car1);




const a = Object.values(obj);  // returns values of object
console.log(a);

const key = Object.keys(obj);
console.log(key);


for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);
}


let obj3 = {
    name: "Ajmal",
    age: 23
}

// prevent looping in object for certain key 
// inherit hoke bhi koyi property key athi he tho uska bhi property ka access apka pass hoga
Object.defineProperty(obj3, "name", {
    enumerable: false
})

for (let k in obj3) {
    console.log(k);
    
}

Object.defineProperty(obj3.__proto__, "toString", {
    enumerable: true,
})

for (let k in obj3) {
    console.log(k);
    
}



user = {
    name: "rohit",
    age: 29
}

Object.defineProperty(user, "name" , {
    writable: false
})

user.name = "AJMAL"

console.log(Object.getOwnPropertyDescriptor(user, "name"));
