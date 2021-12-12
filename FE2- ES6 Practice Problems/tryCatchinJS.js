// try catch / throw:  https://www.youtube.com/watch?v=_am9rKw4vWw
// try{
//   // throw true;
//   throw {name: "Bubba", message:"salmon"};
//   console.log("Hello.. I'm trying");
// }

// catch(err){
//   console.log ("Caught : ", err.name, err.message);
// }

// finally {
//   console.log ("took you a long time!");
// }

// console.log ("end")

/* Caught :  Bubba salmon
took you a long time!
end */

/*

Try Catch in JavaScript
When an error occurs, JavaScript will normally stop, and generate an error message. The try/catch/finally statement handles some or all of the errors that may occur in a block of code, while still running code.

Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseen things. In the following video you will learn how to use try/catch & throw in action. */

/* 
Problem Description
The getX(x) function returns its parameter x normally under all conditions but throws an error if x equals 5. This must error must be "caught" by the errorHandler() function.


Complete the errorHandler() function such that:

errorHandler() function should call the function getX()

Input to getX() should be x ie. getX(x),

Return the result obtained from getX() function, if error occurs catch and return the error.

References
JavaScript Errors - Throw and Try to Catch

(MDN) JavaScript: try...catch

Input
You are given an integer named, x.

Output
Complete the errorHandler function as per the given statement

Solution: https://www.youtube.com/watch?time_continue=24&v=wAoh4P8bCWE&feature=emb_logo
*/

function errorHandler(x) {
  try {
    let y = getX(x);
    return y;
  } catch (err) {
    return err;
  }
}

function getX(x) {
  if (x == 5) {
    //   corrected Occurred spelling mistake
    return new Error("Error Occurred");
  }
  return x;
}

module.exports = errorHandler;
/* 
Crio Methodology

Milestone 1: Understand the problem clearly
1. Ask questions & clarify the problem statement clearly.
2. Take an example or two to confirm your understanding of the input/output & extend it to test cases
Milestone 2: Finalize approach & execution plan
1. Understand what type of problem you are solving.
     a. Obvious logic, tests ability to convert logic to code
     b. Figuring out logic
     c. Knowledge of specific domain or concepts
     d. Knowledge of specific algorithm
     e. Mapping real world into abstract concepts/data structures
2. Brainstorm multiple ways to solve the problem and pick one
3. Get to a point where you can explain your approach to a 10 year old
4. Take a stab at the high-level logic & write it down.
5. Try to offload processing to functions & keeping your main code small.
Milestone 3: Code by expanding your pseudocode
1. Make sure you name the variables, functions clearly.
2. Avoid constants in your code unless necessary; go for generic functions, you can use examples for your thinking though.
3. Use libraries as much as possible
Milestone 4: Prove to the interviewer that your code works with unit tests
1. Make sure you check boundary conditions
2. Time & storage complexity
3. Suggest optimizations if applicable
*/
