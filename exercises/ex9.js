/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

// Input
const camelCase = function(input) {
  //get all words in an array
  //make first letter capitalized except for 1st word
  //concatanate all words without space
  //if the string has no space, just return the value
  let arr = [];
  let capitalLetter = "";
  let firstLetter = "";
  let remainLetter = "";
  let convertLetter = "";
  arr = input.split(" ");
  let lengthOfarr = arr.length;

 for (let i = 1; i < lengthOfarr; i++) {
   firstLetter = arr[i].slice(0,1);
   capitalLetter = firstLetter.toUpperCase();
   remainLetter = arr[i].slice(1,arr[i].length);
   convertLetter += letter + remainLetter; 
 }
  return arr[0] + convertLetter;
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

