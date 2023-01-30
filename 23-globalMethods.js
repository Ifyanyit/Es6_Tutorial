//ES6 added 2 new global number methods:

isFinite()
isNaN()

//The global isFinite() method returns false if the argument is Infinity or NaN.

//Otherwise it returns true:
isFinite(10/0);       // returns false
isFinite(10/1);       // returns true


//The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:
isNaN("Hello");       // returns true