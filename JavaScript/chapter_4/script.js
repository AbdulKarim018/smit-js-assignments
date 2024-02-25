var [a, b, c] = [1, 2, 3];
var msg = document.getElementById("msg");
// Legal variable names
var $name = "John Doe";
var _name = "John Doe";
var name = "John Doe";
var name1 = "John Doe";
var name2 = "John Doe";

// Illegal variable names
// var 1name = "John Doe";
// var @name = "John Doe";
// var #name = "John Doe";
// var %name = "John Doe";
// var &name = "John Doe";

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write(
//   "Variable names can only contain letters, numbers, $ and _ . For example $my_1stVariable"
// );
// document.write("<br>");
// document.write(
//   "Variables must begin with a letter, $ or _. For example $name, _name or name"
// );
// document.write("<br>");
// document.write("Variable names are case sensitive");
// document.write("<br>");
// document.write("Variable names should not be JS keywords");
// document.write("<br>");

msg.innerHTML = "<h1>Rules for naming JS variables</h1>";
msg.innerHTML +=
  "Variable names can only contain letters, numbers, $ and _ . For example $my_1stVariable";
msg.innerHTML += "<br>";
msg.innerHTML +=
  "Variables must begin with a letter, $ or _. For example $name, _name or name";
msg.innerHTML += "<br>";
msg.innerHTML += "Variable names are case sensitive";
msg.innerHTML += "<br>";
msg.innerHTML += "Variable names should not be JS keywords";
