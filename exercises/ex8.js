/*
The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value.

Instruction
Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.
*/

const repeatNumbers = function(data) {
  // Put your solution here
  let repeatNum = 0;
  let numOfTimes = 0;
  let r = 0;
  let numOfArr = 0;
  let print = "";

  numOfArr = data.length;
 if (numOfArr === 1) {
    repeatNum = data[0][0]; //1
    numOfTimes = data[0][1] //10
    while (r < numOfTimes) {
      print += repeatNum;
      r++;
    }
 } else if (numOfArr > 1) {
   for (let i = 0; i < numOfArr; i++) { //repeat twice 0 1
    for (let j = 0; j < 2; j++){ //repeat twice 0 1
        // data[i][j]; //00, 01, 10, 11 = 1,2,2,3
        repeatNum = data[i][0]; //1
        numOfTimes = data[i][1]; //2
       
        while(r < numOfTimes) {
          print += repeatNum;
          r++;
        }
    }
   }
 }

  return print;
};

// console.log(repeatNumbers([[1, 10]])); // 1111111111
// console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // 10101010, 343434343434, 9292


