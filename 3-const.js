// use cost when declaring a new array, object, function or RegExp.
// Always declare a variable with const when you know that the value should not be changed.

// You can create a constant array but cannot reassign array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// You can create a const object:
//But you can NOT reassign the object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// Redeclaring a variable with const, in another scope, or in another block, is allowed:
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}