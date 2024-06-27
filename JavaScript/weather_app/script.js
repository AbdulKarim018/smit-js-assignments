const weatherDiv = document.getElementById("weather_div");

const citySelector = document.getElementById("city_selector");

function getData(lat, lon, cb) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c153479685c47f1b34a83591f3b1acbe`
  )
    .then((res) => res.json())
    .then((data) => cb(data));
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const cities = [
  { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
  { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
  { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
  { name: "Faisalabad", latitude: 31.4504, longitude: 73.135 },
  { name: "Rawalpindi", latitude: 33.5973, longitude: 73.0479 },
  { name: "Multan", latitude: 30.1575, longitude: 71.5249 },
  { name: "Peshawar", latitude: 34.0151, longitude: 71.5249 },
  { name: "Quetta", latitude: 30.1798, longitude: 66.975 },
  { name: "Sialkot", latitude: 32.4945, longitude: 74.5229 },
  { name: "Gujranwala", latitude: 32.1877, longitude: 74.1945 },
  { name: "Hyderabad", latitude: 25.396, longitude: 68.3578 },
  { name: "Sukkur", latitude: 27.7032, longitude: 68.8583 },
  { name: "Larkana", latitude: 27.5618, longitude: 68.209 },
  { name: "Bahawalpur", latitude: 29.3956, longitude: 71.6836 },
  { name: "Sargodha", latitude: 32.0836, longitude: 72.6711 },
  { name: "Mardan", latitude: 34.1983, longitude: 72.0405 },
  { name: "Kasur", latitude: 31.1187, longitude: 74.4507 },
  { name: "Sahiwal", latitude: 30.6764, longitude: 73.1068 },
  { name: "Rahim Yar Khan", latitude: 28.4195, longitude: 70.3039 },
  { name: "Gujrat", latitude: 32.5736, longitude: 74.0789 },
];

citySelector.innerHTML += cities
  .map((city) => `<option>${city.name}</option>`)
  .join("");

citySelector.addEventListener("change", (e) => {
  const selectedCity = cities.find((city) => city.name === e.target.value);
  // console.log(selectedCity);
  window.selectedCity = selectedCity;
  getData(selectedCity.latitude, selectedCity.longitude, updateUI);
});

function updateUI(weatherData) {
  const { main, weather } = weatherData;

  // console.log(weatherData);

  weatherDiv.innerHTML = `
  
<div class="border border-black rounded-md px-24 py-2 mt-4 grid grid-rows-6">
  <div class="row-span-1 text-center">
    <h2 class="flex items-center justify-center gap-2">
      <i class="fa-solid fa-location-dot"></i>
      <p class="text-2xl font-bold">${window.selectedCity.name}</p>
    </h2>
    <p>${days[new Date().getDay()]}, ${new Date().getDate()} ${
    months[new Date().getMonth()]
  }</p>
  </div>
  <div class="row-span-2 flex items-center justify-center">
    <img src="https://openweathermap.org/img/w/${
      weather[0].icon
    }.png" class="size-32" />
  </div>
  <div class="row-span-3 flex flex-col gap-5">
    <p class="text-center text-7xl">${Math.round(main.temp - 273)}&deg;</p>
    <p class="text-center text-3xl">${weather[0].main}</p>
    <p class="text-center">Feels like ${Math.round(
      main.feels_like - 273
    )}&deg;</p>
  </div>
</div>
  
  `;
}
