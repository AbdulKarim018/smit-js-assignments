import {
  db,
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  updateDoc,
} from "./firebase.js";

const todoForm = document.getElementById("todo_form");
const todoContainer = document.getElementById("todo_container");
const loader = document.getElementById("loader");

const deleteAllBtn = document.getElementById("delete_all_btn");
deleteAllBtn.addEventListener("click", async () => {
  if (confirm("Are you sure you want to delete all the todos?")) {
    showLoader();
    const querySnapshot = await getDocs(todosCollection);
    showLoader();
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  }
  renderTodos(await getTodos());
});

const todosCollection = collection(db, "todos");

todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const todo = todoForm.querySelector("input").value;
  if (!todo || !(todo.trim().length > 0)) return alert("Please enter a todo");
  todoForm.reset();

  showLoader();

  const docRef = await addDoc(todosCollection, {
    title: todo,
    isComplete: false,
  });
  renderTodos(await getTodos());
  console.log(docRef);
});

async function getTodos() {
  showLoader();
  const querySnapshot = await getDocs(todosCollection);
  hideLoader();
  const todos = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    todos.push({ ...data, id: doc.id });
  });
  return todos;
}

function renderTodos(todos) {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    todoContainer.innerHTML += `
    

          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-primary todo_checkbox" id="${
                todo.id
              }" ${todo.isComplete ? "checked" : ""} />
              <span class="text-lg">${todo.title}</span>
            </div>
            <div class="flex items-center gap-2" id="${todo.id}">
              <button class="btn btn-success text-white todo_action_edit">Edit</button>
              <button class="btn btn-error text-white todo_action_delete">Delete</button>
            </div>
          </div>


    `;
  });

  const todoCheckboxes = document.querySelectorAll(".todo_checkbox");
  todoCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", async () => {
      const id = checkbox.id;
      const isChecked = checkbox.checked;
      await toggleTodoComplete(id, isChecked);
      // renderTodos(await getTodos());
    });
  });

  const todoDeleteActionBtns = document.querySelectorAll(".todo_action_delete");
  todoDeleteActionBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.parentNode.id;
      btn.disabled = true;
      await deleteTodo(id);
    });
  });

  const todoEditActionBtns = document.querySelectorAll(".todo_action_edit ");
  todoEditActionBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.parentNode.id;
      btn.disabled = true;
      const todo = prompt("Enter the new title");
      if (!todo || !(todo.trim().length > 0)) return;
      showLoader();
      await editTodoTitle(id, todo);
      btn.disabled = false;
    });
  });
}

async function deleteTodo(id) {
  showLoader();
  await deleteDoc(doc(todosCollection, id));
  renderTodos(await getTodos());
}

async function editTodoTitle(id, todo) {
  showLoader();
  await updateDoc(doc(todosCollection, id), {
    title: todo,
  });
  renderTodos(await getTodos());
}

async function toggleTodoComplete(id, isChecked) {
  const todo = doc(todosCollection, id);
  showLoader();
  await updateDoc(todo, {
    isComplete: isChecked,
  });
  hideLoader();
}

const showLoader = () => (loader.style.display = "block");
const hideLoader = () => (loader.style.display = "none");

(async () => {
  renderTodos(await getTodos());
})();
