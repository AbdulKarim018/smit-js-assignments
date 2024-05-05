const daysElem = document.getElementById("daysElem");
const hoursElem = document.getElementById("hoursElem");
const minsElem = document.getElementById("minsElem");
const secsElem = document.getElementById("secsElem");

const initialDate = new Date();

const baqaraEidDate = new Date("jun 16 2024 00:00:00");

const msLeft = baqaraEidDate - initialDate;

const daysLeft = Math.floor(msLeft / (1000 * 60 * 60 * 24));
const hoursLeft = Math.floor(
  (msLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const minsLeft = Math.floor(
  (msLeft % (1000 * 60 * 60)) / (1000 * 60)
);
const secsLeft = Math.floor((msLeft % (1000 * 60)) / 1000);

daysElem.innerText = daysLeft;
hoursElem.innerText = hoursLeft;
minsElem.innerText = minsLeft;
secsElem.innerText = secsLeft;

setInterval(() => {
  const currentDate = new Date();

  const milliSecondsLeft = baqaraEidDate - currentDate;

  const daysLeft = Math.floor(milliSecondsLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (milliSecondsLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minsLeft = Math.floor(
    (milliSecondsLeft % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secsLeft = Math.floor((milliSecondsLeft % (1000 * 60)) / 1000);

  daysElem.innerText = daysLeft;
  hoursElem.innerText = hoursLeft;
  minsElem.innerText = minsLeft;
  secsElem.innerText = secsLeft;
}, 1000);
