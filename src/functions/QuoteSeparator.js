function quoteSeparator(sentence) {
  const letterCount = {};

  // Convert the sentence to lowercase to make it case-insensitive
  const uppercaseSentence = sentence.toUpperCase();

  // Loop through each character in the sentence
  for (const char of uppercaseSentence) {
    // Check if the character is a letter
    if (/[A-Z]/.test(char)) {
      // Increment the count for the letter in the letterCount object
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
  }

  return letterCount;
}
export default quoteSeparator;

// Example usage:
const sentence = "hello world";
const result = quoteSeparator(sentence);
console.log(result);
