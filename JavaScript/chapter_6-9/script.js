// Question 1

var num = prompt("Enter a number");

document.write("<h3>Result: </h3>", "<br>");
document.write("The value of a is: " + num);
document.write("<br>............................................<br><br>");
document.write("The value of ++a is: " + ++num, "<br>");
document.write("Now the value of a is: " + num);
document.write("<br><br><br>");
document.write("The value of a++ is: " + num++, "<br>");
document.write("Now the value of a is: " + num);
document.write("<br><br><br>");
document.write("The value of --a is: " + --num, "<br>");
document.write("Now the value of a is: " + num);
document.write("<br><br><br>");
document.write("The value of a-- is: " + num--, "<br>");
document.write("Now the value of a is: " + num);

// Question 2

/*
2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
*/

var num1 = 2,
  num2 = 1;
var result = --num1 - --num2 + ++num2 + num2--;

document.write("<h3>Result: </h3>", "<br>");
document.write("a is: " + num1, " because a is pre-decremented", "<br>");
document.write("b is: " + num2, " because b is pre-decremented", "<br>");
document.write("result is: " + result, "<br>");

// Question 3

var username = prompt("Enter your name");
document.write("Welcome " + username);

// Question 5

var num = prompt("Enter a number", 5);
document.write("<h3>Table of " + num + "</h3>", "<br>");
for (var i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num * i, "<br>");
}

// Question 6

var sub1 = prompt("Enter first subject name", "Maths");
var sub2 = prompt("Enter second subject name", "English");
var sub3 = prompt("Enter third subject name", "Urdu");
var totalMarks = 100;
var marks1 = prompt("Enter marks of " + sub1, 45);
var marks2 = prompt("Enter marks of " + sub2, 67);
var marks3 = prompt("Enter marks of " + sub3, 78);
var totalObtained = +marks1 + +marks2 + +marks3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write("<h3>Student Result</h3>");
document.write("<table>");
document.write(
  "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>"
);
document.write(
  "<tr><td>" +
    sub1 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    marks1 +
    "</td><td>" +
    (marks1 / totalMarks) * 100 +
    "%</td></tr>"
);
document.write(
  "<tr><td>" +
    sub2 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    marks2 +
    "</td><td>" +
    (marks2 / totalMarks) * 100 +
    "%</td></tr>"
);
document.write(
  "<tr><td>" +
    sub3 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    marks3 +
    "</td><td>" +
    (marks3 / totalMarks) * 100 +
    "%</td></tr>"
);
document.write(
  "<tr><th></th><th>" +
    totalMarks * 3 +
    "</th><th>" +
    totalObtained +
    "</th><th>" +
    percentage +
    "%</th></tr>"
);
document.write("</table>");

document.write("<br><br><br>");
