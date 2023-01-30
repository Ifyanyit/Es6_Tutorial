// The let keyword allows you to declare a variable with block scope.
// That variable can only be accessed inside the block {} it is declared in. 
// 'var' can be accessed in and outside block scope.
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

console.log(x); // This prints 10