/*
Problem Description
You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.


You are supposed to find out which character occurs the maximum number of times and its occurrence count in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.


For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.

Input format
One line of input containing the string S.

Output format
You will have to output two space separated values:

The character which occurs the maximum number of times.

The number of its occurrence.

Sample Input 1
Statements are unique.

Sample Output 1
e 4

Constraints
1 <= |S| <= 100
*/


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function readIntArr() {
    let str = readLine();
    str = str.split(" ");
    let arr = [];
    for ( let i = 0; i < str.length; i++ ) {
        arr.push(parseInt(str[i], 10));
    }
    return arr;
}

function print(x) {
    process.stdout.write(x + "");
}

// TODO: Implement this method
function mostFrequent(text) {
var expCounts = {};
var maxKey = '';
for(var i = 0; i < text.length; i++)
{
    var key = text[i];
    if(!expCounts[key]){
     expCounts[key] = 0;
    }
    expCounts[key]++;
    if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key;
    }
}

var result = (maxKey + expCounts[maxKey]) ;
return (result);

}
// NOTE: Please do not modify this function
function main() {
    let text = readLine();
    let result = mostFrequent(text);
    print(result[0] + " " + result[1]);
}

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