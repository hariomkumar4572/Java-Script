
// JAVASCRIPT ARRAY - COMPLETE CONCEPTS


// 1. Creating Arrays
const arr = [10, 20, 30, 40, 50];
const heroes = ["Hario", "Satyam", "Hariom"];
const mixed = [10, "Hello", true, null];
const newArr = new Array(1, 2, 3, 4);

console.log("1. Array:", arr);
console.log("New Array:", newArr);


// 2. Accessing Array Elements
console.log("2. First:", arr[0]);
console.log("Last:", arr[arr.length - 1]);


// 3. Array Length
console.log("3. Length:", arr.length);


// 4. Updating Elements
arr[1] = 25;
console.log("4. Updated:", arr);


// 5. Adding Elements
arr.push(60);          // Add at end
arr.unshift(5);        // Add at beginning
console.log("5. Added:", arr);


// 6. Removing Elements
arr.pop();             // Remove from end
arr.shift();           // Remove from beginning
console.log("6. Removed:", arr);


// 7. splice() - Add, Remove, Replace
const nums = [10, 20, 30, 40, 50];

nums.splice(1, 2);     // Remove 2 elements from index 1
console.log("7. Splice Remove:", nums);

nums.splice(1, 0, 15, 25); // Insert elements
console.log("Splice Insert:", nums);

nums.splice(0, 1, 5);  // Replace element
console.log("Splice Replace:", nums);


// 8. slice() - Copy Part of an Array
const numbers = [10, 20, 30, 40, 50];

console.log("8. Slice:", numbers.slice(1, 4));
console.log("Original:", numbers);


// 9. Searching Elements
console.log("9. indexOf:", numbers.indexOf(30));
console.log("Includes:", numbers.includes(40));
console.log("Last Index:", [1, 2, 1].lastIndexOf(1));


// 10. Array Loops
console.log("10. For Loop:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("For...of:");
for (const value of numbers) {
    console.log(value);
}

console.log("forEach:");
numbers.forEach((value, index) => {
    console.log(index, value);
});


// 11. map() - Transform Elements
const doubled = numbers.map(n => n * 2);
console.log("11. Map:", doubled);


// 12. filter() - Select Elements
const greaterThan20 = numbers.filter(n => n > 20);
console.log("12. Filter:", greaterThan20);


// 13. reduce() - Calculate One Value
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log("13. Reduce Sum:", total);


// 14. find() and findIndex()
console.log("14. Find:", numbers.find(n => n > 25));
console.log("Find Index:", numbers.findIndex(n => n > 25));


// 15. some() and every()
console.log("15. Some:", numbers.some(n => n > 40));
console.log("Every:", numbers.every(n => n > 0));


// 16. Sorting Arrays
const values = [40, 10, 100, 5, 20];

console.log("16. Ascending:", [...values].sort((a, b) => a - b));
console.log("Descending:", [...values].sort((a, b) => b - a));


// 17. reverse()
console.log("17. Reverse:", [...values].reverse());


// 18. Joining Array Elements
console.log("18. Join:", numbers.join(" - "));


// 19. concat() - Combine Arrays
const a = [1, 2, 3];
const b = [4, 5, 6];

console.log("19. Concat:", a.concat(b));


// 20. Spread Operator
const copy = [...a];
const combined = [...a, ...b];

console.log("20. Copy:", copy);
console.log("Combined:", combined);


// 21. Destructuring
const colors = ["Red", "Green", "Blue"];
const [first, second, third] = colors;

console.log("21. First Color:", first);
console.log("Other Colors:", second, third);


// 22. Nested Arrays
const nested = [[1, 2], [3, 4], [5, 6]];

console.log("22. Nested:", nested);
console.log("Nested Element:", nested[1][0]);


// 23. flat() - Flatten Nested Arrays
const deep = [1, [2, [3, 4]]];

console.log("23. Flat:", deep.flat(2));


// 24. Array.isArray()
console.log("24. Is Array:", Array.isArray(numbers));
console.log("Is Array:", Array.isArray("Hello"));


// 25. Array.from()
console.log("25. From:", Array.from("HELLO"));


// 26. Array.of()
console.log("26. Of:", Array.of(5, 10, 15));


// 27. fill()
const filled = new Array(4).fill(0);
console.log("27. Fill:", filled);


// 28. Copy Within
const copyWithinArr = [1, 2, 3, 4, 5];

copyWithinArr.copyWithin(0, 3);
console.log("28. CopyWithin:", copyWithinArr);


// 29. Removing Duplicate Values
const duplicate = [1, 2, 2, 3, 3, 4];

const unique = [...new Set(duplicate)];
console.log("29. Unique:", unique);


// 30. Chaining Array Methods
const result = [1, 2, 3, 4, 5, 6]
    .filter(n => n % 2 === 0)
    .map(n => n * 10)
    .reduce((sum, n) => sum + n, 0);

console.log("30. Chaining Result:", result);
