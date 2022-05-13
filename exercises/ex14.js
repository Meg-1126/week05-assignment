/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/


const calculateChange = function(total, cash) {
  let change = cash - total; //213(2.13), 1377(13.77), 499(4.99)
  let n1 = Math.floor(change / 1) % 10; //1st digit
  let n2 = Math.floor(change / 10) % 10; //2nd 
  let n3 = Math.floor(change / 100) % 10; //3rd
  let n4 = Math.floor(change / 1000) % 10; //4th
  
  let twentyDollars = 1;
  let tenDollars = 1;
  let fiveDollars = 1;
  let twoDollars = 1;
  let oneDollar = 1;
  let quater = 1;
  let dime = 1;
  let nickel = 1;
  let penny = 1;

//   //n4 ($10-$90, 1-9)
  if (n4%2===0) {
      // decide how many $20 bills to give back
      switch (n4) {
          case 2:
          twentyDollars *=1;
          break;
          case 4:
          twentyDollars *=2;
          break;
          case 6:
          twentyDollars *=3;
          break;
          case 8:
          twentyDollars *=4;
          break;
      }
  } else { //ODD
    switch (n4) {
      case 1:
      tenDollars *=1;
      break;
      case 3:
      tenDollars *=3;
      break;
      case 5:
      twentyDollars *=2;
      tenDollars *=1;
      break;
      case 7:
      twentyDollars *=3;
      tenDollars *=1;
      break;
      case 9:
      twentyDollars *=4;
      tenDollars *=1;
      break;
   }
  }
  
  switch (n3) {
     case 1:
     oneDollar *=1;
     break;
     case 2:
     twoDollars *=1;
     break;
     case 3:
     twoDollars *=1;
     oneDollar *=1;
     break;
     case 4:
     twoDollars *=2;
     break;
     case 5:
     fiveDollars *=1;
     break;
     case 6:
     fiveDollars *=1;
     oneDollar *=1;
     break;
     case 7:
     fiveDollars*=1;
     twoDollars *=2;
     break;
     case 8:
     fiveDollars *=1;
     twoDollars *=2;
     oneDollar *=1;
     break;
     case 9:
     fiveDollars *=1;
     twoDollars *=2;
     break;
  }
  switch (n2) { //10 cents
    case 1:
    dime *=1;
    break;
    case 2:
    dime *=2;
    break;
    case 3:
    quater *=1;
    nickel *=1;
    break;
    case 4:
    dime *=4;
    break;
    case 5:
    quater *=2;
    break;
    case 6:
    quater *=2;
    dime *=1;
    break;
    case 7:
    quater *=2;
    dime *=2;
    break;
    case 8:
    quater *=3;
    nickel *=1;
    break;
    case 9:
    quater *=3;
    dime *=1;
    nickel *=1;
    break;
 }
 switch (n1) { //1 cent
  case 1:
  penny *=1;
  break;
  case 2:
  penny *=2;
  break;
  case 3:
  penny *=3;
  break;
  case 4:
  penny *=4;
  break;
  case 5:
  nickel *=1;
  break;
  case 6:
  nickel *=1;
  penny *=1;
  break;
  case 7:
  nickel *=1;
  penny *=2;
  break;
  case 8:
  nickel *=1;
  penny *=3;
  break;
  case 9:
  nickel *=1;
  penny *=4;
  break;
}

  //Obj
  let giveBack = {
    "$20": twentyDollars, 
    "$10": tenDollars,
    "$5": fiveDollars,
    "$2": twoDollars,
    "$1": oneDollar,
    "¢25": quater,
    "¢10": dime,
    "¢5": nickel,
    "¢1": penny
  }
  return giveBack;
};

// console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 } 213
// console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 } 1377
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 } 499



