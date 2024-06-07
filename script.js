const projects = [
  {
    title: "Chapter 1",
    link: "/smit-js-assignments/JavaScript/chapter_1/index.html",
  },
  {
    title: "Chapter 2",
    link: "/smit-js-assignments/JavaScript/chapter_2/index.html",
  },
  {
    title: "Chapter 3",
    link: "/smit-js-assignments/JavaScript/chapter_3/index.html",
  },
  {
    title: "Chapter 4",
    link: "/smit-js-assignments/JavaScript/chapter_4/index.html",
  },
  {
    title: "Chapter 5",
    link: "/smit-js-assignments/JavaScript/chapter_5/index.html",
  },
  {
    title: "Chapter 6-9",
    link: "/smit-js-assignments/JavaScript/chapter_6-9/index.html",
  },
  {
    title: "Chapter 9-11",
    link: "/smit-js-assignments/JavaScript/chapter_9-11/index.html",
  },
  {
    title: "Chapter 12-13",
    link: "/smit-js-assignments/JavaScript/chapter_12-13/index.html",
  },
  {
    title: "Chapter 14-16",
    link: "/smit-js-assignments/JavaScript/chapter_14-16/index.html",
  },
  {
    title: "Chapter 17-19",
    link: "/smit-js-assignments/JavaScript/chapter_17-19/index.html",
  },
  {
    title: "Assignment #6",
    link: "/smit-js-assignments/JavaScript/assignment_6_extra/index.html",
  },
  {
    title: "Chapter 21-25",
    link: "/smit-js-assignments/JavaScript/chapter_21-25/index.html",
  },
  {
    title: "Assignment #8",
    link: "/smit-js-assignments/JavaScript/assignment_8/index.html",
  },
  {
    title: "Assignment #9",
    link: "/smit-js-assignments/JavaScript/assignment_9/index.html",
  },
  {
    title: "Baqara Eid Countdown",
    link: "/smit-js-assignments/JavaScript/baqara-eid-countdown/index.html",
  },
  { title: "Calculator", link: "https://js-web-calculator.netlify.app/" },
  {
    title: "Text Editor",
    link: "/smit-js-assignments/JavaScript/text_editor/index.html",
  },
  {
    title: "Student Grading System",
    link: "/smit-js-assignments/JavaScript/student_grading_system/index.html",
  },
  {
    title: "Assignment #14",
    link: "/smit-js-assignments/JavaScript/assignment_14/index.html",
  },
  {
    title: "Objects Assignment",
    link: "/smit-js-assignments/JavaScript/objects_assignment/index.html",
  },
];

function getAnchorMarkup(project) {
  return `<a class="flex transform items-center justify-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:underline hover:text-gray-700" href="${project.link}">
    <span class="mx-2 text-base font-medium">${project.title}</span>
  </a>`;
}

const javascriptLinks = document.getElementById("javascript_links");

for (const project of projects) {
  javascriptLinks.innerHTML += getAnchorMarkup(project);
}
