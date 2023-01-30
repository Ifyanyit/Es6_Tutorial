// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);
console.log(letters.size);

// or
// Create a Set
const letters1 = new Set(["a","b","c"]);

//new Set()	Creates a new Set
//add()	Adds a new element to the Set
//delete()	Removes an element from a Set
//has()	Returns true if a value exists
//clear()	Removes all elements from a Set
//forEach()	Invokes a callback for each element
//values()	Returns an Iterator with all the values in a Set
//keys()	Same as values()
//entries()	Returns an Iterator with the [value,value] pairs from a Set