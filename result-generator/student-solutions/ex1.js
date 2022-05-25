/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function(data) {
    // Put your solution here
    let number = 0;
    let sum = 0;

    if (data.length > 2 ) {
        let largest = Math.max(...data);
        let index = data.indexOf(largest);
        data.splice(index, 1);
        let secondLargest = Math.max(...data);
        sum = largest + secondLargest;
        return sum;
    } else if (data.length === 2) {
        number = data[0] + data[1];
        return number;
    } else {
        return "Incorrect data. Give at least 2 numbers.";
    } 
};
  
// console.log(sumLargestNumbers(1)); // Print error message
// console.log(sumLargestNumbers([1, 10])); // 11
// console.log(sumLargestNumbers([1, 2, 3])); // 5
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126
console.log(sumLargestNumbers([1, 2, 3, 4, 5])); // 9