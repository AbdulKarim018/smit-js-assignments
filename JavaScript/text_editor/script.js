const FONT_FAMILYS = {
  sans: "ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  poppins: "Poppins, sans-serif",
  roboto: "Roboto, sans-serif",
  montserrat: "Montserrat, sans-serif",
}

const textDiv = document.getElementById("text_div")
const boldToggle = document.getElementById("bold_toggle")
const italicToggle = document.getElementById("italic_toggle")
const underlineRadio = document.getElementById("underline-radio")
const linethroughRadio = document.getElementById("linethrough-radio")

boldToggle.addEventListener("change", (e) => {
  textDiv.style.fontWeight = e.target.checked ? "bold" : "normal"
})

italicToggle.addEventListener("change", (e) => {
  textDiv.style.fontStyle = e.target.checked ? "italic" : "normal"
})

underlineRadio.addEventListener("change", (e) => {
  textDiv.style.textDecoration = e.target.checked ? "underline" : "normal"
})

linethroughRadio.addEventListener("change", (e) => {
  textDiv.style.textDecoration = e.target.checked ? "line-through" : "normal"
})

function updateCase(caseType) {
  textDiv.style.textTransform = caseType
}

function updateAlignment(alignment) {
  textDiv.style.textAlign = alignment
}

function updateFont(font) {
  textDiv.style.fontFamily = FONT_FAMILYS[font]
}