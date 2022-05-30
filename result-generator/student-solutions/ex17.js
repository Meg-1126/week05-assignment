/*In this exercise, we will be given a url encoded string of key-value pairs, and we will have to turn it into a JavaScript object.

URL Encoded Strings
To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
So the following URL encoded string:

city=Vancouver&weather=lots%20of%20rain
Could be converted to the following JavaScript object:

{
  city: "Vancouver",
  weather: "lots of rain"
}

Instruction
Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.

*/

// [SOLUTION?]
// 1.Divide a string between "=", "&"
// 2.Store divided string to a variable
// 3.If divided string has "%20" convert it to a space
// 4.Create an object using the variables #2-3 
// 5. Return objects
//Use indexOf + join

const urlDecode = function(text) {
  let obj = {};
  let arr = [];
  if (text.indexOf("%20") !== -1) { //if a string has %20 
    arr = text.split("%20").join(" ");
  }
  if  (text.indexOf("&") !== -1) { //if a string has &
    const pairsArr = arr.split("&");
    for (let pairStr of pairsArr) {
     const pairArr = pairStr.split("=");
     obj[pairArr[0]] = pairArr[1];
    }
  } else {
    arr = text.split("=");
    obj[arr[0]] = arr[1];
  }
  return obj;
};

// console.log(urlDecode("duck=rubber")); //{duck: "rubber"}
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); // {city: "Vancouver", weather: "lots of rain"}
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); // "lots of rain"

module.exports = urlDecode;