var age = 18;
alert("I am " + age + " years old");
var visit = 14;
alert("You have visited this site " + visit + " times");

var birthYear = 2005;
var msg = document.getElementById("msg");
msg.innerHTML =
  "My birth year is " +
  birthYear +
  "<br>Data type of my declared variable is " +
  typeof birthYear;

var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
var store = "XYZ Clothing store";
var storeMsg = document.getElementById("storeMsg");
storeMsg.innerHTML =
  visitorName +
  " ordered " +
  quantity +
  " " +
  productTitle +
  "(s) on " +
  store +
  ".";
