// Question 1

var ch = prompt("Enter a character: ");
if (ch >= "A" && ch <= "Z") {
  alert("It is an uppercase letter.");
} else if (ch >= "a" && ch <= "z") {
  alert("It is a lowercase letter.");
} else if (ch >= "0" && ch <= "9") {
  alert("It is a digit.");
} else {
  alert("It is a special character.");
}

// Question 2

var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");

if (num1 > num2) {
  alert(num1 + " is greater than " + num2);
} else if (num2 > num1) {
  alert(num2 + " is greater than " + num1);
} else if (num1 === num2) {
  alert("Both numbers are equal.");
} else {
  alert("Invalid input.");
}

// Question 3

var num = +prompt("Enter a number: ");
if (num > 0) {
  alert("It is a positive number.");
} else if (num < 0) {
  alert("It is a negative number.");
} else if (num === 0) {
  alert("It is zero.");
} else {
  alert("Invalid input.");
}

// Question 4

var ch = prompt("Enter a character: ");
if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
  alert("It is a vowel.");
} else if (ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U") {
  alert("It is a vowel.");
} else {
  alert("It is not a vowel.");
}

// Question 5

var correctPassword = "12345";
var password = prompt("Enter your password: ");
if (password === "") {
  alert("Please enter your password.");
} else if (password === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}

// Question 6

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Question 7

var time = +prompt("Enter time in 24-hour format: ");
if (time >= 0 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night!");
} else {
  alert("Invalid input.");
}
