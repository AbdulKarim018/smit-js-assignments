const ls = localStorage;

const notesContainer = document.getElementById("notesContainer");

const createNoteModal = document.getElementById("createNoteModal");

const noteForm = document.getElementById("noteForm");

const usernameSpan = document.getElementById("username");

function getNotes() {
  return JSON.parse(ls.getItem("notes") || "[]");
}

function updateNotesContainer() {
  const notes = getNotes();
  console.log(notes);
  notesContainer.innerHTML = "";
  notes.forEach((note) => {
    notesContainer.innerHTML += `
    <div class="w-64 h-64 bg-white/60 rounded-lg">
        <div class="flex justify-between items-center p-4">
            <h2 class="text-2xl font-bold">${note.title}</h2>
            <button class="btn btn-error bg-red-600" onclick="deleteNote('${note.title}')">Delete</button>
        </div>
        <p class="p-4">${note.content}</p>
    </div>
`;
  });

  notesContainer.innerHTML += `
  
<!-- Open the modal using ID.showModal() method -->
<div
  class="size-64 bg-white bg-opacity-50 rounded-lg grid place-items-center cursor-pointer"
  onclick="createNoteModal.showModal()"
>
  <div class="flex flex-col items-center">
    <i class="fa fa-plus text-5xl"></i>
    <span class="text-xl">Add a note</span>
  </div>
</div>
`;
}

function addNote(title, content) {
  const notes = getNotes();
  notes.push({ title, content });
  ls.setItem("notes", JSON.stringify(notes));
  updateNotesContainer();
}

function deleteNote(title) {
  const notes = getNotes();
  let index;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title === title) {
      index = i;
      break;
    }
  }
  notes.splice(index, 1);
  ls.setItem("notes", JSON.stringify(notes));
  updateNotesContainer();
}

noteForm.onsubmit = function (e) {
  e.preventDefault();
  const title = noteForm.title.value;
  const content = noteForm.content.value;
  addNote(title, content);
  noteForm.reset();
  createNoteModal.close();
};

function getIsLoggedIn() {
  return ls.getItem("isLoggedIn") === "true";
}

function setIsLoggedIn(isLoggedIn) {
  ls.setItem("isLoggedIn", isLoggedIn);
}

function getUser() {
  const user = ls.getItem("user") || "{}";
  console.log(user);
  return JSON.parse(user);
}

function setUser(user) {
  ls.setItem("user", JSON.stringify(user));
}

function getUsername() {
  return getUser().username;
}

function getUserEmail() {
  return getUser().email;
}

if (getIsLoggedIn()) {
  updateNotesContainer();
  notesContainer.classList.remove("hidden");
  usernameSpan.innerHTML = getUsername();
} else {
  location.href = "/smit-js-assignments/JavaScript/notes_app/index.html";
}

function logout() {
  setIsLoggedIn(false);
  usernameSpan.innerHTML = "";
  location.href = "/smit-js-assignments/JavaScript/notes_app/index.html";
}
