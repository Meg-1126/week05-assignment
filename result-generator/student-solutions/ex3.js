/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/
// filter
const numberOfVowels = function(data) {
    // Put your solution here
    let letter = data.split("");
    let result = letter.filter((item)=>{
      if ((item === "a")||(item === "i")||(item === "u")||(item === "e")||(item === "o")){
        return true;
      } 
    })
    return result.length;
  };

  module.exports = numberOfVowels;
  
  // console.log(numberOfVowels("orange")); // 3
  // console.log(numberOfVowels("cornerstone college")); // 7
  // console.log(numberOfVowels("aeiou")); // 5