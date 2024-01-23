import quoteSeparator from "./QuoteSeparator";
export default function removeUsedLetters(mainLetters, usedRawLetters) {
  let usedLetters = quoteSeparator(usedRawLetters);
  const result = { ...mainLetters };

  for (const char in usedLetters) {
    const uppercaseChar = char.toUpperCase(); // Convert to uppercase for case-insensitivity
    if (result[uppercaseChar] !== undefined) {
      result[uppercaseChar] = Math.max(0, result[uppercaseChar] - usedLetters[char]);
    }
  }

  return result;
}
