// 1. Suppose You have an array of object
// var itemsArray = [
// {name:"juice",price:"50", quantity:"3"},
// {name:"cookie",price:"30", quantity:"9"},
// {name:"shirt",price:"880", quantity:"1"},
// {name:"pen",price:"100", quantity:"2"}];
// Calculate total price of each item and all items;

function questionOne() {
  var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" },
  ];

  function calculatePriceOfEachItem() {
    for (const item of itemsArray) {
      console.log(item.quantity * item.price);
    }
  }
  function calculateTotalPrice() {
    var totalPrice = 0;
    for (const item of itemsArray) {
      totalPrice += item.quantity * item.price;
    }
    console.log(totalPrice);
    return totalPrice;
  }
  calculatePriceOfEachItem();
  calculateTotalPrice();
}

// questionOne();

// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.

function questionTwo() {
  const person = {
    name: "Abdul Karim",
    email: "karim.abdul@gmail.com",
    password: "123456",
    age: 25,
    gender: "male",
    city: "Karachi",
    country: "Pakistan",
  };

  if (person.age && person.country) {
    console.log("age and country properties exist");
  }

  // Also check firstName and lastName properties in object.

  if (!person.firstName && !person.lastName) {
    console.log("firstName and lastName properties do not exist");
  }
}

// questionTwo();

// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.

function questionThree() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  const person1 = new Person("Abdul Karim", 25);
  const person2 = new Person("Abdul Karim", 25);
  const person3 = new Person("Abdul Karim", 25);

  console.log(person1);
  console.log(person2);
  console.log(person3);
}

// questionThree();

// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

//  use select box for education and profession,
//  use radio box for gender

// Bonus : use can use localStorage to save records.

const populationList = document.getElementById("population_list");
const popForm = document.getElementById("pop_form");

const poplationData = JSON.parse(localStorage.getItem("populationData")) || [];

function updateUI() {
  populationList.innerHTML = "";
  for (const population of poplationData) {
    populationList.innerHTML += `
<div
        style="
        width: 50%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        "
      >
        <div>${population.name}</div>
        <div>${population.gender}</div>
        <div>${population.address}</div>
        <div>${population.education}</div>
        <div>${population.profession}</div>
      </div>
  `;
  }
}

updateUI();

popForm.addEventListener("submit", addPopulation);

function addPopulation(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value;
  const education = document.getElementById("education").value;
  const profession = document.getElementById("profession").value;

  const population = {
    name,
    gender,
    address,
    education,
    profession,
  };

  poplationData.push(population);
  localStorage.setItem("populationData", JSON.stringify(poplationData));
  updateUI();
  popForm.reset();
}
