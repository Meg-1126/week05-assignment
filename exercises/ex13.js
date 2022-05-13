/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function(date) {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let printMonth = "";
  let printDate = "";
  let printFullDate = "";

  //Get number of date object
  let convertDate = "";
  convertDate = new Date(date); //2017-12-02T08:00:00.000Z
  let numYear = convertDate.getFullYear(); //YYYY
  let numMonth = convertDate.getMonth()+1; //MM
  let numDate = convertDate.getDate(); //DD (if single digit:D)

 //convert numMonth to english month
 switch (numMonth) {
    case 1:
    printMonth = month[0];
    break;
    case 2:
    printMonth = month[1];
    break;
    case 3:
    printMonth = month[2];
    break;
    case 4:
    printMonth = month[3];
    break;
    case 5:
    printMonth = month[4];
    break;
    case 6:
    printMonth = month[5];
    break;
    case 7:
    printMonth = month[6];
    break;
    case 8:
    printMonth = month[7];
    break;
    case 9:
    printMonth = month[8];
    break;
    case 10:
    printMonth = month[9];
    break;
    case 11:
    printMonth = month[10];
    break;
    case 12:
    printMonth = month[11];
    break;
}

//convert numDate to DDst or DDnd in special case (or DDth) 
if(numDate === 1 || numDate === 21 || numDate === 31) { 
  printDate = numDate + "st";
} else if (numDate === 2 || numDate === 22) {
   printDate = numDate + "nd";
} else if (numDate === 3 || numDate === 23) {
  printDate = numDate + "rd";
} else {
  printDate = numDate + "th";
}

//change the order of three components above as required order
printFullDate = printMonth + " " + printDate + ", " + numYear;

return printFullDate;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
