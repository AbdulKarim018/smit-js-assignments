const loginForm = document.getElementById("loginForm");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

function getUser() {
  return JSON.parse(localStorage.getItem("user") || "{}");
}

loginForm.onsubmit = function (e) {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === getUser().username && password === getUser().password) {
    successMessage.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    localStorage.setItem("isLoggedIn", true);
    setTimeout(function () {
      location.href = "/smit-js-assignments/JavaScript/notes_app/notes.html";
    }, 1000);
    return;
  }
  errorMessage.classList.remove("hidden");
};
