let students = [
  { name: "Shayan Faisal", math: 90, english: 30, physics: 70, urdu: 60 },
  // { name: "Ahmed", math: 80, english: 40, physics: 60, urdu: 70 },
  // { name: "Asad", math: 70, english: 50, physics: 50, urdu: 80 },
  // { name: "Ahsan", math: 60, english: 60, physics: 40, urdu: 90 },
]

let isEditing = false

const studentAddForm = document.getElementById("student_add_form");
const studentAddAndEditModal = document.getElementById("student_add_and_edit_modal");
const searchInput = document.getElementById("search_input");

const studentNameInput = document.getElementById("student_name_input")
const englishMarksInput = document.getElementById("english_marks_input")
const urduMarksInput = document.getElementById("urdu_marks_input")
const mathsMarksInput = document.getElementById("maths_marks_input")
const physicsMarksInput = document.getElementById("physics_marks_input")

function createNewStudentString({ name, math, english, physics, urdu }) {
  const total = math + english + physics + urdu;
  const percentage = (total / 400) * 100;
  const grade = percentage >= 80 ? "A+" : percentage >= 70 ? "A" : percentage >= 60 ? "B" : percentage >= 50 ? "C" : percentage >= 40 ? 'D' : 'F'
  return `
  <tbody>
      <tr class="border-b bg-gray-800 border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium whitespace-nowrap text-white"
        >
          ${name}
        </th>
        <td class="px-6 py-4">${english}</td>
        <td class="px-6 py-4">${urdu}</td>
        <td class="px-6 py-4">${physics}</td>
        <td class="px-6 py-4">${math}</td>
        <td class="px-6 py-4">${total}/400</td>
        <td class="px-6 py-4">${percentage.toFixed(2)}%</td>
        <td class="px-6 py-4">${grade}</td>
        <td class="px-6 py-4">
          <div class="flex items-center">
          <button
          type="button"
          onclick="handleEditClick(this)"
          class="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
        >
          Edit
          <button
          type="button"
          onclick="handleDeleteClick(this)"
          class="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-red-600 hover:bg-red-700 focus:ring-red-900"
        >
          Delete
        </button>
          </div>
        </td>
      </tr>
  </tbody>
  
  `
}

// function addNewStudent({ name, math, english, physics, urdu }) {
//   students_table_body.innerHTML += createNewStudentString({ name, math, english, physics, urdu });
// }

function handleDeleteClick(el) {
  const name = el.parentElement.parentElement.parentElement.firstElementChild.innerText
  const nameIndex = students.findIndex(std => std.name === name)
  students.splice(nameIndex, 1)
  updateTableUI(students)
  return
}

function handleEditClick(el) {
  isEditing = true
  // studentNameInput.disabled = true
  const name = el.parentElement.parentElement.parentElement.firstElementChild.innerText

  const modalToggle = studentAddAndEditModal.querySelector('[data-modal-toggle]');
  modalToggle.click();

  const nameIndex = students.findIndex(std => std.name === name)

  const std = students[nameIndex]

  console.log(nameIndex)


  studentNameInput.value = std.name
  englishMarksInput.value = std.english
  urduMarksInput.value = std.urdu
  mathsMarksInput.value = std.math
  physicsMarksInput.value = std.physics


}

function resetForm() {
  studentAddForm.reset()
  isEditing = false
  // studentNameInput.disabled = false
}

function updateTableUI(stds) {

  students_table_body.innerHTML = "";

  for (let i = 0; i < stds.length; i++) {
    const student = stds[i];
    students_table_body.innerHTML += createNewStudentString(student)
  }

}

// to create a new student do this
// addNewStudent({ name: "Ali", math: 90, english: 30, physics: 70, urdu: 60 });

studentAddForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const { student_name, english_marks, urdu_marks, physics_marks, maths_marks } = Object.fromEntries(data.entries());
  // console.log({ english_marks, urdu_marks, physics_marks, maths_marks });
  // addNewStudent({ name: student_name, math: parseInt(maths_marks), english: parseInt(english_marks), physics: parseInt(physics_marks), urdu: parseInt(urdu_marks) });
  // e.target.reset();

  const studentFromStoreIndex = students.findIndex(std => std.name.toLowerCase() === student_name.toLowerCase())

  if (!(studentFromStoreIndex < 0) && !isEditing) {
    return alert("Duplicate Name is not allowed!")
  }

  studentAddForm.reset();
  const modalToggle = studentAddAndEditModal.querySelector('[data-modal-toggle]');
  modalToggle.click();

  if (studentFromStoreIndex > -1 && isEditing) {
    students.splice(studentFromStoreIndex, 1, {
      name: student_name, math: parseInt(maths_marks), english: parseInt(english_marks), physics: parseInt(physics_marks), urdu: parseInt(urdu_marks)
    })
    updateTableUI(students)
    return
  }
  // add to students array
  students.push({ name: student_name, math: parseInt(maths_marks), english: parseInt(english_marks), physics: parseInt(physics_marks), urdu: parseInt(urdu_marks) });
  updateTableUI(students);
})

function filterStudents(stds, query) {
  const filteredStudents = []
  for (let i = 0; i < stds.length; i++) {
    const student = stds[i];
    if (student.name.toLowerCase().includes(query.toLowerCase())) {
      filteredStudents.push(student);
    }
  }
  return filteredStudents
}

searchInput.addEventListener("input", function (e) {
  const searchValue = e.target.value;
  const filteredStudents = filterStudents(students, searchValue);
  updateTableUI(filteredStudents);
})

updateTableUI(students);