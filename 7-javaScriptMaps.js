// Being able to use an Object as a key is an important Map feature.

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ]);

    let aFruit = fruits.get('apples');
    console.log(aFruit);


// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
//delete()	Removes a Map element specified by a key
//has()	Returns true if a key exists in a Map
//forEach()	Invokes a callback for each key/value pair in a Map
//entries()	Returns an iterator object with the [key, value] pairs in a Map
//keys()	Returns an iterator object with the keys in a Map
//values()	Returns an iterator object of the values in a Map

// You can add elements to a Map with the set() method:
// Create a Map
const fruits2 = new Map();

// Set Map Values 
// The set() method can also be used to change existing Map values:
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);

console.log(fruits2);

// The size property returns the number of elements in a Map:
console.log(fruits.size);