// The ... operator expands an iterable (like an array) into more elements:

const cars1 = ["Saab", "Volvo", "BMW"];
const cars2 = ["Saab", "Volvo", ...["BMW"]];
const cars3 = ["Saab", "Volvo", [..."BMW"]];

// The ... operator can be used to expand an iterable into more arguments for function calls:
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);

console.log(maxValue);
console.log(cars1);
console.log(cars2);
console.log(cars3);