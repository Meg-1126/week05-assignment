/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function(data) {
    // Put your solution here
    let vowelCounter = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] == "a") {
         vowelCounter++;
      } else if (data[i] == "e") {
        vowelCounter++;
      } else if (data[i] == "i") {
        vowelCounter++;
      } else if (data[i] == "o") {
        vowelCounter++;
      } else if (data[i] == "u") {
        vowelCounter++;
      }  
    }
    return vowelCounter;
  };
  
  // console.log(numberOfVowels("orange")); // 3
  // console.log(numberOfVowels("cornerstone college")); // 7
  // console.log(numberOfVowels("aeiou")); // 5