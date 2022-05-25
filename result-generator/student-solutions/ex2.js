/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

Warning
Use some sort of looping. Do Not use Array.prototype.filter()
*/

const conditionalSum = function(values, condition) {
    // Your code here
    let evenNum = 0;
    let oddNum = 0;
    // LOOP
    for (let i = 0; i < values.length; i++) {
      if (condition == "even") {
         if (values[i] % 2 === 0) {
           evenNum += values[i]; 
          //  return evenNum;
         }  
      } else if (condition == "odd") {
         if ((values[i] % 2 !== 0) && (values.length > 0)) {
           oddNum += values[i];
          //  return oddNum;
         } 
      }
    }
    // RETURN
    if (condition == "even") {
      return evenNum;
    } else if (condition == "odd") {
      return oddNum;
    } else if (values.length === 0) {
      return 0;
    }
  };
  
// console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
// console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
// console.log(conditionalSum([], "odd")); // 0