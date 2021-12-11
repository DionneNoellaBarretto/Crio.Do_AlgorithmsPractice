/*
Problem Description
Write a method which returns an array without the listed values

References
Arrays

(MDN) JavaScript: Array

Nesting For Loops in JavaScript

Time complexity in JavaScript (Optional)

ArraInput -
arr: The given array

without: A list of elements which are to be removed from arr.

Output -
Return the array after removing the listed values.

Sample input 1 -
arr: [1, 2, 2, 3, 1, 2]

without: [2, 3]

Sample output 1 -
[1, 1]

Solution walkthrough: https://www.youtube.com/watch?v=pTHyiE2q9Ok&feature=emb_logo
 */


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

function removeListedValues(arr, without) {
     let newArr = []

     for (let i = 0; i < arr.length; i++) {
          let arrElem = arr[i];
          let match = false;
          
          for (let j = 0; j < without.length; j++) {
               let woElem = without[j];
              
               if (arrElem === woElem ) {
                    match = true;
               }
               
          }
          if (match === false){
                 console.log( newArr.push(arrElem))  ;
          }
     }
     console.log( newArr);
return newArr;
}
let arr = [1, 2, 2, 3, 1, 2];
let without = [2, 3];

module.exports = removeListedValues;