// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.

// ES5
var x = function(x, y) {
    return x * y;
 }
 
 // ES6
 const x = (x, y) => {x * y};

 // Using const is safer than using var, because a function expression is always a constant value.


 // ES5 
 hello = function() {
    return "Hello World!";
  }

  // ES6
  hello = () => {
    return "Hello World!";
  }

  // Or 
  hello = () => "Hello World!"; // Note: This works only if the function has only one statement.

  hello = (val) => "Hello " + val;
