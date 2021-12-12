/*
Problem Description
You are given a date in the form of "DD/MM/YYYY". Calculate the number of days between the given date and today's date.


Today's day is the date when the program is executed.


Note

Sample I/O considers today's date as 28/08/2020

You may assume all the dates in the input are correct and in the given format

The given date is in the past as compared to today

JavaScript new Date() constructor takes in date in the "MM/DD/YYYY" format

Use let todaysDate = new Date() to get today’s date

Use Split() function to split the input date string 10/08/2020 where you can pass "/" as a deluminator. You can check the reference link given below to know how to use Split() function.

Keep in mind, input strings format is "DD/MM/YYYY" and the JavaScript new Date() constructor take date in the “MM/DD/YYYY” format.

References
JavaScript: Date

Date methods

JavaScript: String.split()

Input
You are given a string containing the date in the given format

Output
Return the number of days between today and the given date.

Sample input 1
10/08/2020

Sample output 1
18

Solution walkthrough: https://www.youtube.com/watch?v=kgl0t-yarAQ&feature=emb_logo
*/

function getNumberOfDays(date) {

// month is 0 indexed! 
let dateString = date.split("/");
dd = parseInt(dateString[0]);
mm = parseInt(dateString[1]);
yyyy = parseInt(dateString[2]);
console.log (dd,mm,yyyy);
// return (dd,mm,yyyy);
let newDate = new Date(yyyy,mm - 1,dd);

let todayDate = new Date();
let milliSecondsDiff = todayDate.getTime() - newDate.getTime();
// return dateObject.getTime() - milliSecondsDiff;

let dayDiff = milliSecondsDiff/(1000*60*60*24);
return Math.floor(dayDiff);
}
let date = "28/08/2020"; 
module.exports = getNumberOfDays;

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