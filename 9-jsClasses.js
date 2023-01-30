// JavaScript Classes are templates for JavaScript Objects.

//Use the keyword class to create a class.

//Always add a method named constructor():

// Create a class car
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

// use the class to create objects:
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1);
console.log(myCar2.name);
console.log(myCar2.name + " "+ myCar2.year);

// Or

//class ClassName {
//    constructor() { ... }
//    method_1() { ... }
//    method_2() { ... }
//    method_3() { ... }
//  }

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";
