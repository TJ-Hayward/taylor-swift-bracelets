import convertValuesToNumbers from "./convertValuesToNumbers";
export default function getLettersFromGlobal() {
  var GlobalLetters = localStorage.getItem("GlobalLetters");
  const GlobalLettersParsed = JSON.parse(GlobalLetters);
  const convertedLetters = convertValuesToNumbers(GlobalLettersParsed);
  return convertedLetters;
}
