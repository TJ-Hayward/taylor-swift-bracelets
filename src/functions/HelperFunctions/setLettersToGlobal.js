export default function setLettersToGlobal(letters) {
  localStorage.setItem("GlobalLetters", JSON.stringify(letters));
}
