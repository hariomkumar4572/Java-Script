// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);

// Removes and returns the last element
let lst = a.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + a);

// Creating an array for splice example
let b = ["HTML", "CSS", "JS"];

// Removes 2 elements starting from index 1
b.splice(1, 2);

console.log("After Removing 2 elements starting from index 1: " + b);