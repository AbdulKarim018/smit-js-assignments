const registerForm = document.getElementById("registerForm");
const successMessage = document.getElementById("successMessage");

registerForm.onsubmit = function (e) {
  e.preventDefault();
  const username = registerForm.username.value;
  const email = registerForm.email.value;
  const password = registerForm.password.value;

  registerForm.reset();

  if (username && email && password) {
    successMessage.classList.remove("hidden");
  }

  const user = {
    username,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));

  setTimeout(function () {
    location.href = "/smit-js-assignments/JavaScript/notes-app/index.html";
  }, 1000);
};
