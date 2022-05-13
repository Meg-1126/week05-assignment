/*In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

Instruction
Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors]
} 
*/

const organizeInstructors = function(instructors) {
  // [SOLUTION?]
  // 1.Get all course names inside obj of array
  // 2.Find keyname(=instructors' name) which has specific course name in the same obj
  // 3.Create another array using instructors' name you found in #2
  // 4.Create an obj which has some keys and assign array of instructors based on keys value

  const courses = {
    courseName: arrOfInstructors

  } 
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
])); // { iOS: ["Samuel"], Web: ["Victoria", "Karim", "Donald"]}
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));//{ Blockchain: ["Brendan"], Web: ["David", "Carlos"], iOS: ["Martha"]}
