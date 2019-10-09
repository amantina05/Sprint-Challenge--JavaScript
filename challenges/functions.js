// ==== Callbacks ====

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume (a, b, cb) {
  return cb(a, b)
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (num1, num2) {
  return num1 + num2
}
function multiply (num1, num2){
  return num1 * num2
}
function greeting (firstName, lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume('Mary', 'Poppins', greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:
// "`The function myFunction() is given a definition at first, but it isn;t called. After the function is defined (lines 47-54),
// the function is invoked (line 58). The function proceeds to define the variable internal, and console logs external (i.e. "I'm outside!")
// It then defines a new function called nestedFunction (line54). It then invokes nestedFunction, which then proceeds to console.log internal (i.e. "Hello! I'm inside the function").
// When the function is invoked again, as I did when I console.log(myFunction) in line 62, the function is executed again. This is where closure comes in.
// The external is within the lexical scope of myFunction (i.e. in its closure) and the internal is within the lexical scope of nested function, meaning that, when it's called, it carries with it all the variables along with their associated values when it's
// called another time, hence the repeated strings when I console.log (i.e. invoke) the function twice more. The external and internal variable values were called and stored within the function
// after the function is invoked are remembered when the myFunction is invoked twice more. `" -adriana

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
