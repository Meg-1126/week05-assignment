/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function(data) {
    // Put your solution here
    let largestNum = - Infinity;
    let secondLargestNum = - Infinity;
        data.forEach((item) => {
        if (item > largestNum) {
           secondLargestNum = largestNum;
           largestNum = item; 
         }
        })
        if (data.length < 2) {
         return "Error!";
        } else {
            return largestNum + secondLargestNum;
        }
    }

module.exports = sumLargestNumbers;
// console.log(sumLargestNumbers(1)); // Print error message
// console.log(sumLargestNumbers([1, 10])); // 11
// console.log(sumLargestNumbers([1, 2, 3])); // 5
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126
// console.log(sumLargestNumbers([1, 2, 3, 4, 5])); // 9