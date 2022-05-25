/*In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Input

Expected Output


Instruction
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
*/

const instructorWithLongestName = function(instructors) {
    // Put your solution here
    let firstObj;
    let longestNameObj = instructors[0]; //Store 1st array of object
    let longestNameLength = instructors[0].name.length; //Store name length of 1st object
    for (let i = 1; i < instructors.length; i++) {
      if ((instructors[i].name.length > instructors[i-1].name.length) && (longestNameLength !== instructors[i].name.length)) { //If the current name is longer than prev name + current name is not equal to the current longest name length
        longestNameObj = instructors[i]; //Update value as current object
        longestNameLength = instructors[i].name.length; //Update value as current name length
      } 
    }
    return longestNameObj;
}
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "Mobile"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ])); //{name: "Jeremiah", course: "Web"}
  
  // console.log(instructorWithLongestName([
  //   {name: "Matthew", course: "Web"},
  //   {name: "Domascub", course: "Mobile"}, //test (I added)
  //   {name: "David", course: "Mobile"},
  //   {name: "Domascus", course: "Web"}
  // ])); //{name: "Domascub", course: "Mobile"}