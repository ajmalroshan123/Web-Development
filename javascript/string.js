// let obj = {
//     id: 1,
//     name: "Ajmal"
// }

// console.log(obj)

// obj.id = 10;

// console.log(obj);

// const obj2 = {
//     id: 2,
//     name: "roshan"
// }

// obj2 = obj;
// obj2.id = 11;

// console.log(obj2);
// console.log(obj)

// This will show error because const will not change


name = "ajmal";

console.log(`His name is ${name}`);


// string concatination
str1 = "Hello";
str2 = " Coder Army"
str3 = str1 + str2;

console.log(str3);

// length
console.log(str1.length);

// next line
message = "ajmal is a  software ajmal engineer"
console.log(message);

// escape character
comment = "ajmal is a \\nsnr.software engineer";
console.log(comment);

// Print specific character
name = "Ajmal";
console.log(name[0]);
console.log(name.charAt(1));

// lowerCase and upperCase
// This will not change original string but creates new string
console.log(name.toLowerCase());
console.log(name.toUpperCase());

// searching in string
console.log(message.indexOf("ajmal"));
console.log(message.lastIndexOf("ajmal"));
console.log(message.includes("ajmal"));

// Extracting substring
let newString = "HelloDon";
console.log(newString.slice(0, 3));
console.log(newString.substring(0, 3));
// slice can take negative index
console.log(newString.slice(-4, 6));

// substr(start, length): Extracts a substring of a specified length
console.log(newString.substr(0, 5));

// Replacing content
// replace()
// replaceAll()
let str10 = "Hello ji kaise ho";
console.log(str10.replace('ji', 'Money')); // first appearance is replaced
console.log(str10);

// Splitting string
// split(delimeter): splits string into a array based on a delimeter

let str11 = "Money, Honey, sunny, funny";
console.log(str11.split(','));


// Trimming
// trim() := Remove whitespace from both ends
// trimStart() / trimEnd() := Remove whitespace from start or end

let str12 = "  Hello ji  ";
str12 = str12.trim()

console.log(str12);






