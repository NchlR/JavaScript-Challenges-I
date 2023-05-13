// Return the Sum of Two Numbers
function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(3, 5));

// =================================================================

// Convert Hours into Seconds
function hoursintoSeconds(hour) {
  //let minutes = hour * 60
  //let seconds = minutes * 60

  // or

  //let seconds = hour * 60 * 60
  //return seconds

  // or

  return hour * 60 * 60;
}

console.log(hoursintoSeconds(2));

// =================================================================

// Calculate the Perimeter of a Rectangle
function calcPerimeter(length, width) {
  // return 2 * length + 2 * width;

  // or

  return 2 * (length + width);
}

console.log(calcPerimeter(10, 20));

// =================================================================

// Calculate the Area of a Triangle
function calcAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}

console.log(calcAreaOfTriangle(20, 20));

// =================================================================

// Extend a String

function appendFrontend(string) {
  return string + "Frontend";
}

console.log(appendFrontend("Apple"));

// =================================================================

// Greater than 100?
function sumGreaterThan100(num1, num2) {
  // if (num1 + num2 > 100) {
  // return true;
  // }
  // else {
  // return false;
  // }

  // or can be simplified to

  return num1 + num2 > 100;

  // true or false built into code
}

console.log(sumGreaterThan100(91, 10));

// =================================================================

// Less than or Equal to Zero
function lessThanOrEqualToZero(num1) {
  return num1 <= 0;
}

console.log(lessThanOrEqualToZero(3));

// =================================================================

//Opposite boolean
function oppositeBoolean(bool) {
  return !false;
  // ! = opposite

  // if (bool ===false) {
  // return true;
  // }
  // return false
}

console.log(oppositeBoolean(false));

// =================================================================

// Is not the number 0
function isNotZero(num) {
  return num !== 0;
  // if it returns a boolean by default you can return directly
}

console.log(isNotZero(5));

// =================================================================

// Calculate the remainder
function calcRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder(10, 9));

// =================================================================

// Is the number odd?
function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(5));

// =================================================================

// If a number is even, return 1 otherwise return -1
function booleanInteger(num) {
  // if (num % 2 === 0) {
  // return 1;
  // }
  // return -1;

  // For simpler code use a ternary operator

  return num % 2 === 0 ? 1 : -1;
  // Meaning: if a number / 2 = an even number, then return 1, or else return -1
}

console.log(booleanInteger(7));

// =================================================================

// Check if a user is logged in AND subscribed
function isLoggedInAndSubscribed(loggedin, subscribed) {
  return loggedin === "LOGGED_IN" && subscribed === "SUBSCRIBED";
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));

// =================================================================

// Check if a user is logged in OR subscribed
// function isLoggedInAndSubscribed(loggedin, subscribed) {
//  return loggedin === "LOGGED_IN" || subscribed === "SUBSCRIBED";
// }

// console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));

// =================================================================






