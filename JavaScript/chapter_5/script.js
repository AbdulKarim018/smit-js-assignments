// Question 1 & 2
var num1 = prompt("Enter the first number: ");
var num2 = prompt("Enter the second number: ");

var additionResult = +num1 + +num2;
var subtractionResult = +num1 - +num2;
var multiplicationResult = +num1 * +num2;
var divisionResult = +num1 / +num2;
var remainderResult = +num1 % +num2;
var exponentResult = (+num1) ** +num2;

document.write(
  "The sum of " + num1 + " and " + num2 + " is " + additionResult,
  "<br>"
);
document.write(
  "The difference of " + num1 + " and " + num2 + " is " + subtractionResult,
  "<br>"
);
document.write(
  "The product of " + num1 + " and " + num2 + " is " + multiplicationResult,
  "<br>"
);
document.write(
  "The quotient of " + num1 + " and " + num2 + " is " + divisionResult,
  "<br>"
);
document.write(
  "The remainder of " + num1 + " and " + num2 + " is " + remainderResult,
  "<br>"
);
document.write(
  "The result of " +
    num1 +
    " to the power of " +
    num2 +
    " is " +
    exponentResult,
  "<br>"
);

// Question 3
document.write("<br><br>");

var number;
document.write("Value after variable declaration is: " + number, "<br>");
number = 5;
document.write("Initial value: " + number, "<br>");
number++;
document.write("Value after increment is: " + number, "<br>");
number += 7;
document.write("Value after addition is: " + number, "<br>");
number--;
document.write("Value after decrement is: " + number, "<br>");
number %= 3;
document.write("The remainder is: " + number, "<br>");

// Question 4

document.write("<br><br>");

var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write(
  "Total cost to buy " +
    numberOfTickets +
    " tickets to a movie is " +
    totalCost +
    "PKR"
);

// Question 5

document.write("<br><br>");

var table = 4;
document.write("Table of " + table, "<br>");
for (let i = 1; i <= 10; i++) {
  document.write(table + " x " + i + " = " + table * i, "<br>");
}

// Question 6

document.write("<br><br>");

var celsius = 25;
var fahrenheit = (celsius * 9) / 5 + 32;
document.write(celsius + "°C is " + fahrenheit + "°F", "<br>");
var fahrenheit = 77;
var celsius = ((fahrenheit - 32) * 5) / 9;
document.write(fahrenheit + "°F is " + celsius + "°C", "<br>");

// Question 7

document.write("<br><br>");

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
var totalCost =
  priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;
document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1, "<br>");
document.write("Quantity of item 1 is " + quantityItem1, "<br>");
document.write("Price of item 2 is " + priceItem2, "<br>");
document.write("Quantity of item 2 is " + quantityItem2, "<br>");
document.write("Shipping Charges " + shippingCharges, "<br><br>");
document.write("Total cost of your order is " + totalCost, "<br>");

// Question 8

document.write("<br><br>");

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<h2>Marks Sheet</h2>");
document.write("Total marks: " + totalMarks, "<br>");
document.write("Marks obtained: " + obtainedMarks, "<br>");
document.write("Percentage: " + percentage + "%", "<br>");

// Question 9

document.write("<br><br>");

var usDollars = 10;
var saudiRiyals = 25;
var usDollarExchangeRate = 104.8;
var saudiRiyalExchangeRate = 28;

var pkr =
  usDollars * usDollarExchangeRate + saudiRiyals * saudiRiyalExchangeRate;

document.write("<h2>Currency In PKR</h2>");
document.write("Total Currency in PKR:", pkr);

// Question 10

document.write("<br><br>");

var someNumber = 5;
number = ((someNumber + 5) * 10) / 2;
document.write("The result is: " + someNumber);

// Question 11

document.write("<br><br>");

var currentYear = 2024;
var birthYear = 2005;

var age = currentYear - birthYear;

document.write("<h2>Age Calculator</h2>");

document.write("Current Year: " + currentYear, "<br>");
document.write("Birth Year: " + birthYear, "<br>");
document.write(
  "You are either " + age,
  " Or ",
  age - 1,
  " years old. ",
  "<br>"
);

// Question 12

document.write("<br><br>");

var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius ** 2;

document.write("<h2>The Geometrizer</h2>");
document.write("Radius of a circle: " + radius, "<br>");
document.write("The circumference is: " + circumference, "<br>");
document.write("The area is: " + area, "<br>");

// Question 13

document.write("<br><br>");

var favoriteSnack = "chocolate chip";
var currentAge = 18;
var maximumAge = Math.ceil(Math.random() * 80);
var amountPerDay = 3;

var totalSnacks = (maximumAge - currentAge) * 365 * amountPerDay;

document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("Favorite Snack: " + favoriteSnack, "<br>");
document.write("Current Age: " + currentAge, "<br>");
document.write("Estimated Maximum Age: " + maximumAge, "<br>");
document.write("Amount of snacks per day: " + amountPerDay, "<br>");
document.write(
  "You will need " +
    totalSnacks +
    " " +
    favoriteSnack +
    " to last you until the ripe old age of " +
    maximumAge
);

document.write("<br><br>");
