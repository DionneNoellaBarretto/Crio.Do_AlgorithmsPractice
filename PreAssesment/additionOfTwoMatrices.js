/*
Problem Description
Given two matrices of dimension n x m, add the two matrices and print the resultant matrix.

Input format
There are 2n+1 lines of input.

First line contains two space separated integers n, m.

In the next 2n lines, each line contains m elements. The first n lines are for the first matrix, next n for the second matrix.

Output format
Print the resultant matrix.

Sample Input 1
2 2

1 2

3 4

1 1

1 1

Sample Output 1
2 3

4 5

Constraints
1 <= n,m <= 100

0 <= element of matrices <= 100000
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
        return string.replace(/\s+/g, " ").trim();
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
    for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i], 10));
    }
    return arr;
}

function print(x) {
    process.stdout.write(x + "");
}

// TODO: Implement this method
function additionOfMatrix(matrix1, matrix2) {

    var result = [];
    result = new Array(matrix1.length);
    for (var i = 0; i < result.length; i++) {
        result[i] = new Array(matrix1[i].length);
        for (var j = 0; j < result[i].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}

// NOTE: Please do not modify this function
function main() {
    let [n, m] = readLine();
    let matrix1 = [];
    let matrix2 = [];
    for (let i = 0; i < n; i++) {
        matrix1.push(readIntArr());
    }
    for (let i = 0; i < n; i++) {
        matrix2.push(readIntArr());
    }
    let finalMatrix = additionOfMatrix(matrix1, matrix2);
    for (const row of finalMatrix) {
        console.log(...row);
    }
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