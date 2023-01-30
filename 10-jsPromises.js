//A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".
//"Producing Code" can take some time and "Consuming Code" must wait for the result.
const myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise).
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );


    // Example
    const myPromise1 = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("I love You !!"); }, 3000);
      });
      
      myPromise1.then(function(value) {
        document.getElementById("demo").innerHTML = value;
      });

//A JavaScript Promise object can be:

//Pending
//Fulfilled
//Rejected
//The Promise object supports two properties: state and result.

//While a Promise object is "pending" (working), the result is undefined.

//When a Promise object is "fulfilled", the result is a value.

//When a Promise object is "rejected", the result is an error object.

// Here is how to use a Promise:

myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );


  // Example 