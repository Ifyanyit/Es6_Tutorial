// Redeclaring a JavaScript var variable is allowed anywhere in a program:

var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed

// Redeclaring an existing var or let variable to const, in the same scope, is not allowed:
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
//const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
//const x = 2;   // Not allowed
}