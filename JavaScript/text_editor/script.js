const FONT_FAMILIES = {
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
const wordCountElem = document.getElementById('word_count')
const interactiveElements = document.getElementsByClassName('interactive_element')
const sansFontRadioButton = document.getElementById('font-radio-1')

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
  textDiv.style.fontFamily = FONT_FAMILIES[font]
}

function resetStyles() {
  textDiv.style = {
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: "normal",
    textTransform: '',
    textAlign: "",
    fontFamily: FONT_FAMILIES["sans"]
  }
  for (const element of interactiveElements) {
    element.checked = false
  }
  sansFontRadioButton.checked = true
}

function editText() {
  const newText = prompt("Enter new text:").trim()
  textDiv.innerText = newText
  updateWordCount(countWords(newText))

}

const countWords = (text) => text.split(' ').length

const updateWordCount = (count) => {
  wordCountElem.innerText = count
}

updateWordCount(countWords(textDiv.innerText))
