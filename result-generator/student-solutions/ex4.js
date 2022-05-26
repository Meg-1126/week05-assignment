/*In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Input

Expected Output


Instruction
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
*/
// forEach
const instructorWithLongestName = function(instructors) {
    // Put your solution here
    let longestName = instructors[0];
    instructors.forEach(item => {
      if (item.name.length > longestName.name.length) {
        longestName = item;
      }
    });
    return longestName;
    
}

  module.exports = instructorWithLongestName;
  
  // console.log(instructorWithLongestName([
  //   {name: "Samuel", course: "Mobile"},
  //   {name: "Jeremiah", course: "Web"},
  //   {name: "Ophilia", course: "Web"},
  //   {name: "Donald", course: "Web"}
  // ])); //{name: "Jeremiah", course: "Web"}
  
  // console.log(instructorWithLongestName([
  //   {name: "Matthew", course: "Web"},
  //   {name: "Domascub", course: "Mobile"}, //test (I added)
  //   {name: "David", course: "Mobile"},
  //   {name: "Domascus", course: "Web"}
  // ])); //{name: "Domascub", course: "Mobile"}