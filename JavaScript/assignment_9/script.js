// Coding Question 1: Write a function in JavaScript called roundNumber() that takes a number as input
// and returns the number rounded to the nearest integer.

// Hint: Consider using the Math.round() method to round the input number to the nearest integer.

function randomNumber(n) {
  return Math.round(n);
}

// Coding Question 2: Create a function called generateRandomInRange(min, max) that
// generates a random integer between min and max (inclusive) in JavaScript.

// Hint: You can use Math.random() to generate a random number between 0 and 1, then scale and shift it to fit within the specified range.

function generateRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(generateRandomInRange(20, 30));
// console.log(generateRandomInRange(10, 30));
// console.log(generateRandomInRange(20, 50));

// Coding Question 3: Write a JavaScript function called convertToNumber(str) that takes a string as
// input and converts it into a number. Ensure the function returns NaN if the string
// cannot be converted into a valid number.

// Hint: Look into the parseInt() and parseFloat() functions in JavaScript. Make sure to handle cases where
// the string is not a valid number.

function convertToNumber(str) {
  return +str;
}

// console.log(convertToNumber("5"));
// console.log(convertToNumber("589"));
// console.log(convertToNumber("589a"));

// Coding Question 4: Implement a JavaScript function called truncateDecimal(num, decimals) that
// truncates a number num to a specified number of decimals.

// Hint: You may want to multiply the input number by a power of 10, truncate the decimal part,
// and then divide it back to the original power of 10 to achieve the desired truncation.

function truncateDecimal(num, decimals) {
  return num.toFixed(decimals);
}

// console.log(truncateDecimal(43.99909889709, 3));
// console.log(truncateDecimal(43.99909889709, 4));
// console.log(truncateDecimal(43.99909889709, 5));

// Coding Question 5: Develop a JavaScript function named formatNumber(num, decimalPlaces) that formats
// a number num to a string representation with the specified number of decimal
// places decimalPlaces. Ensure that the function returns a string even if the input is not a valid number.

// Hint: Use the .toFixed() method to control the number of decimal places.
// Remember to handle non-numeric inputs gracefully to prevent errors.

function formatNumber(num, decimalPlaces) {
  if (typeof num !== "number" || typeof decimalPlaces !== "number") {
    return NaN;
  }
  return num.toFixed(decimalPlaces).toString();
}

console.log(formatNumber(4.3434, 2));
console.log(formatNumber("a", 2));
console.log(formatNumber(true, 2));
