// Question 1
let cityName = prompt("Enter city name: ", "Karachi");

if (cityName === "Karachi") {
  alert("Welcome to city of lights");
}

// Question 2

let gender = prompt("Enter gender", "male");
if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma'am");
}

// Question 3
let signal = prompt("Enter traffic signal", "red");
if (signal === "red") {
  alert("Must Stop");
} else if (signal === "yellow") {
  alert("Ready to move");
} else if (signal === "green") {
  alert("Move now");
}

// Question 4

let fuel = prompt("How much fuel is left?", 0.24);
if (+fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("You are good to go!");
}

// Question 5

// a
let a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// b
let b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// c
let c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}

// d
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals " + totalCost);
}

// e
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

// f
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Question 6
let sub1 = +prompt("Enter marks of first subject", 0);
let sub2 = +prompt("Enter marks of second subject", 0);
let sub3 = +prompt("Enter marks of third subject", 0);
let totalMarks = 300;
let obtainedMarks = sub1 + sub2 + sub3;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade, remarks;
if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
}
if (percentage >= 70 && percentage < 80) {
  grade = "A";
  remarks = "Good";
}
if (percentage >= 60 && percentage < 70) {
  grade = "B";
  remarks = "You need to improve";
}
if (percentage < 60) {
  grade = "Fail";
  remarks = "Sorry";
}
document.write(`

  <h1>Marks Sheet</h1>
  <p>Total Marks: ${totalMarks}</p>
  <p>Marks Obtained: ${obtainedMarks}</p>
  <p>Percentage: ${percentage}%</p>
  <p>Grade: ${grade}</p>
  <p>Remarks: ${remarks}</p>
  
  `);

// Question 7

let secretNumber = 7;
let guess = +prompt("Guess the secret number", 0);
if (guess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guess === secretNumber + 1) {
  alert("Close enough to the correct answer");
} else {
  alert("Try again");
}

// Question 8

let number = +prompt("Enter a number", 0);
if (number % 3 === 0) {
  alert("The number is divisible by 3");
}

// Question 9

let num = +prompt("Enter a number", 0);
if (num % 2 === 0) {
  alert("The number is even");
}
if (num % 2 !== 0) {
  alert("The number is odd");
}

// Question 10

let temp = +prompt("Enter temperature", 0);
if (temp > 40) {
  alert("It is too hot outside.");
} else if (temp > 30 && temp <= 40) {
  alert("The Weather today is Normal.");
} else if (temp > 20 && temp <= 30) {
  alert("Today’s Weather is cool.");
} else if (temp <= 20) {
  alert("OMG! Today’s weather is so Cool.");
}

// Question 11

let firstNumber = +prompt("Enter first number", 0);
let secondNumber = +prompt("Enter second number", 0);
let operation = prompt("Enter operation", "+");
let result;
if (operation === "+") {
  result = firstNumber + secondNumber;
  alert(`The sum of ${firstNumber} and ${secondNumber} is ${result}`);
}
if (operation === "-") {
  result = firstNumber - secondNumber;
  alert(`The difference of ${firstNumber} and ${secondNumber} is ${result}`);
}
if (operation === "*") {
  result = firstNumber * secondNumber;
  alert(`The product of ${firstNumber} and ${secondNumber} is ${result}`);
}
if (operation === "/") {
  result = firstNumber / secondNumber;
  alert(`The division of ${firstNumber} and ${secondNumber} is ${result}`);
}
if (operation === "%") {
  result = firstNumber % secondNumber;
  alert(`The modulus of ${firstNumber} and ${secondNumber} is ${result}`);
}
