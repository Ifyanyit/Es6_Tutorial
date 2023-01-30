// The JavaScript for/of statement loops through the values of an iterable objects.

// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

// Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];
let text1 = "";
let text2 = "";

for (let x of cars) {
  text1 += x + " ";
}

for (let y of cars) {
    text2 += y + ",";
}

console.log(text1);
console.log(text2);


// Looping over a String
let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x + " ";
}