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

// [SOLUTION (STEPS)]
// Calculate change
// Divide change into 4 parts by digits
// Decide which bill or coin to give back based on value of digit
// Create obj using value above
// Delete elem of property if the value is 0 
// Return obj

const calculateChange = function(total, cash) {
  //Calculate change
  let change = cash - total; //213(2.13), 1377(13.77), 499(4.99)
  //Store change in variable (each digit)
  let n1 = Math.floor(change / 1) % 10; //1st digit
  let n2 = Math.floor(change / 10) % 10; //2nd digit 
  let n3 = Math.floor(change / 100) % 10; //3rd digit
  let n4 = Math.floor(change / 1000) % 10; //4th digit
  //Declare variables to store num of bill to give back
  let twentyDollars = 0;
  let tenDollars = 0;
  let fiveDollars = 0;
  let twoDollars = 0;
  let oneDollar = 0;
  let quater = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;
 
   // decide how many $20 bills to give back based on value of 4th digit
  switch (n4) {
    case 2: //$20
    twentyDollars +=1;
    break;
    case 4: //$40
    twentyDollars +=2;
    break;
    case 6: //$60
    twentyDollars +=3;
    break;
    case 8: //$80
    twentyDollars +=4;
    break;
    case 1: //$10
    tenDollars +=1;
    break;
    case 3: //$30
    tenDollars +=3;
    break;
    case 5: //$50
    twentyDollars +=2;
    tenDollars +=1;
    break;
    case 7: //$70
    twentyDollars +=3;
    tenDollars +=1;
    break;
    case 9: //$90
    twentyDollars +=4;
    tenDollars +=1;
    break;
  }
  
  switch (n3) {
     case 1: //$1
     oneDollar +=1;
     break;
     case 2: //$2
     twoDollars +=1;
     break;
     case 3: //$3
     twoDollars +=1;
     oneDollar +=1;
     break;
     case 4: //$4
     twoDollars +=2;
     break;
     case 5: //$5
     fiveDollars +=1;
     break;
     case 6: //$6
     fiveDollars +=1;
     oneDollar +=1;
     break;
     case 7: //$7
     fiveDollars +=1;
     twoDollars +=2;
     break;
     case 8: //$8
     fiveDollars +=1;
     twoDollars +=2;
     oneDollar +=1;
     break;
     case 9: //$9
     fiveDollars +=1;
     twoDollars +=2;
     break;
  }

  switch (n2) { //10 cents
    case 1:
    dime +=1;
    break;
    case 2:
    dime +=2;
    break;
    case 3:
    quater +=1;
    nickel +=1;
    break;
    case 4:
    dime +=4;
    break;
    case 5:
    quater +=2;
    break;
    case 6:
    quater +=2;
    dime +=1;
    break;
    case 7:
    quater +=2;
    dime +=2;
    break;
    case 8:
    quater +=3;
    nickel +=1;
    break;
    case 9:
    quater +=3;
    dime +=1;
    nickel +=1;
    break;
 }

 switch (n1) { //1 cent
  case 1:
  penny +=1;
  break;
  case 2:
  penny +=2;
  break;
  case 3:
  penny +=3;
  break;
  case 4:
  penny +=4;
  break;
  case 5:
  nickel +=1;
  break;
  case 6:
  nickel +=1;
  penny +=1;
  break;
  case 7:
  nickel +=1;
  penny +=2;
  break;
  case 8:
  nickel +=1;
  penny +=3;
  break;
  case 9:
  nickel +=1;
  penny +=4;
  break;
}

  //Obj
  const giveBack = {
    twentyDollarsBill: twentyDollars, 
    tenDollarsBill: tenDollars,
    fiveDollarsBill: fiveDollars,
    twoDollarsBill: twoDollars,
    oneDollarBill: oneDollar,
    quater25: quater,
    dime10: dime,
    nickel5: nickel,
    penny1: penny
  }

  if (giveBack.twentyDollarsBill === 0) {
    delete giveBack.twentyDollarsBill;
  } 
  if (giveBack.tenDollarsBill === 0) {
    delete giveBack.tenDollarsBill;
  } 
  if (giveBack.fiveDollarsBill === 0) {
    delete giveBack.fiveDollarsBill;
  } 
  if (giveBack.twoDollarsBill === 0) {
   delete giveBack.twoDollarsBill;
  } 
  if (giveBack.oneDollarBill === 0) {
   delete giveBack.oneDollarBill;
  } 
  if (giveBack.quater25 === 0) {
   delete giveBack.quater25;
  } 
  if (giveBack.dime10 === 0) {
    delete giveBack.dime10;
  } 
  if (giveBack.nickel5 === 0) {
   delete giveBack.nickel5;
  } 
  if (giveBack.penny1 === 0) {
   delete giveBack.penny1;
  }
  return giveBack;
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 } 213
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 } 1377
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 } 499



