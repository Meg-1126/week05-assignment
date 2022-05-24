/*In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

Instruction
Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors]
} 
*/

// [SOLUTION?]
  // 1. Get all course names inside obj of array
  // 2. Check how many kinds of courses the array have
  // 3. Store all couses name in variable (it will be used as key name later)
  // 4. Check instructors' name using course name. Put all instructors' name in one array if they have the same couse name
  // 5. Create a new array using #3 and #4

const organizeInstructors = function(instructors) {
  let nameOfInstructor = [];
  let nameOfCourse = [];
  let courseCounter = 0;
  let keyName = "";
  let numOfKeys = 0;
  

  //1&2
  for (let i = 0; i < instructors.length; i++) {
     nameOfInstructor.push(instructors[i].name); 
     if (nameOfCourse.includes(instructors[i].course)===false) {
       nameOfCourse.push(instructors[i].course); //Get all courses' name
       numOfKeys++; //Get num of courses the array have
     }
  }

  //4
  

// return numOfKeys;
  
  
  
  //+++For each+++
  // instructors.forEach(function(element){
  //   nameOfInstructor += element.name + "/";
  //   nameOfCourse += element.course + "/";
  // });
  // arrOfInstructors = nameOfInstructor.split("/");
  // arrOfCourses = nameOfCourse.split("/");
  // return arrOfCourses;
  //+++For each+++

  //Obj
  // const courses = {
  //   courseName: arrOfInstructors

  // } 
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
])); // { iOS: ["Samuel"], Web: ["Victoria", "Karim", "Donald"]}
// console.log(organizeInstructors([
//   {name: "Brendan", course: "Blockchain"},
//   {name: "David", course: "Web"},
//   {name: "Martha", course: "iOS"},
//   {name: "Carlos", course: "Web"}
// ]));//{ Blockchain: ["Brendan"], Web: ["David", "Carlos"], iOS: ["Martha"]}
