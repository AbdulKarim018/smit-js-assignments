// Question 1

var students = [];

// Question 2

var students = new Array();

// Question 3

var students = ["Taha", "Usman", "Shayan"];

// Question 4

var numbers = [1, 2, 3, 4, 5];

// Question 5

var boolean = [true, false];

// Question 6

var mixed = ["Taha", 1, true];

// Question 7

var qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
document.write("<h1>Qualifications:</h1>");
document.write("<ol>");
for (var i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");

// Question 8

var students = ["Taha", "Usman", "Shayan"];
var scores = [320, 230, 480];
for (var i = 0; i < students.length; i++) {
  document.write(
    `Score of ${students[i]} is ${scores[i]}. Percentage: ${
      (scores[i] / 500) * 100
    }%<br>`
  );
}

// Question 9

var colors = ["Red", "Green", "Blue"];
document.write("<h1>Colors:</h1>");
document.write("<ol>");
for (var i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// a

var color = prompt("What color do you want to add to the beginning?");
colors.unshift(color);
document.write("<h1>Updated Colors:</h1>");
document.write("<ol>");
for (var i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// b

var color = prompt("What color do you want to add to the end?");
colors.push(color);
document.write("<h1>Updated Colors:</h1>");
document.write("<ol>");
for (var i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// c

colors.unshift("Pink", "Purple");
document.write("<h1>Updated Colors:</h1>");
document.write("<ol>");
for (var i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// d

colors.shift();
document.write("<h1>Updated Colors:</h1>");
document.write("<ol>");
for (var i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// e

colors.pop();
document.write("<h1>Updated Colors:</h1>");
document.write("<ol>");
for (var i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// f

var index = +prompt("At which index do you want to add a color?");
var color = prompt("What color do you want to add?");
colors.splice(index, 0, color);
document.write("<h1>Updated Colors:</h1>");
document.write("<ol>");
for (var i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// g

var index = +prompt("At which index do you want to delete a color?");
var quantity = +prompt("How many colors do you want to delete?");
colors.splice(index, quantity);
document.write("<h1>Updated Colors:</h1>");
document.write("<ol>");
for (var i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// Question 10

var scores = [320, 230, 480, 120];
document.write("<h1>Scores of Students:</h1>");
document.write("<ol>");
for (var i = 0; i < scores.length; i++) {
  document.write("<li>" + scores[i] + "</li>");
}
document.write("</ol>");
document.write("<h1>Ordered Scores of Students:</h1>");
document.write("<ol>");
for (var i = 0; i < scores.sort().length; i++) {
  document.write("<li>" + scores[i] + "</li>");
}
document.write("</ol>");

// Question 11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
document.write("<h1>Cities list:</h1>");
document.write("<ol>");
for (var i = 0; i < cities.length; i++) {
  document.write("<li>" + cities[i] + "</li>");
}
document.write("</ol>");
document.write("<h1>Selected cities list:</h1>");
document.write("<ol>");
for (var i = 2; i < selectedCities.length; i++) {
  document.write("<li>" + selectedCities[i] + "</li>");
}
document.write("</ol>");

// Question 12

var arr = ["This", "is", "my", "cat"];
document.write("<h1>Array:</h1>");
document.write("<p>" + arr.join(" ") + "</p>");

// Question 13

var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("<h1>Devices:</h1>");
document.write("<p>" + devices.join(", ") + "</p>");
document.write("<h1>Out:</h1>");
document.write("<p>" + devices.shift() + "</p>");
document.write("<h1>Out:</h1>");
document.write("<p>" + devices.shift() + "</p>");
document.write("<h1>Out:</h1>");
document.write("<p>" + devices.shift() + "</p>");
document.write("<h1>Out:</h1>");
document.write("<p>" + devices.shift() + "</p>");

// Question 14

var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("<h1>Devices:</h1>");
document.write("<p>" + devices.join(", ") + "</p>");
document.write("<h1>Out:</h1>");
document.write("<p>" + devices.pop() + "</p>");
document.write("<h1>Out:</h1>");
document.write("<p>" + devices.pop() + "</p>");
document.write("<h1>Out:</h1>");
document.write("<p>" + devices.pop() + "</p>");

// Question 15

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");
