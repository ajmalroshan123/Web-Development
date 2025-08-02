let num = 281.333;
console.log(num.toFixed(2));
console.log(typeof num.toString());
console.log(typeof String(num));

// Math
console.log(Math.LN10);

// Floor and ceil

console.log(Math.floor(22.33));
console.log(Math.ceil(24.44));

// Random

console.log(Math.random()); // 0 <=> 9
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));

console.log(Math.floor(Math.random()*10)+1); // 1 to 10
console.log(Math.floor(Math.random()*10)+11) // 11 to 20


// console.log(Math.floor(Math.random()*(max-min+1)+min))
console.log(Math.floor(Math.random()*(30-10+1)+10))