let score = "33abc";

// Check data type
console.log(typeof score);
console.log(typeof (score));

// Convert string to number
let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// Boolean conversion
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Hariom" => true

// Number to string conversion
let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);