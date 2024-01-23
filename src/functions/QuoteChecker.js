import quoteSeparator from "./QuoteSeparator";

export default function quoteChecker(letterInventory, quote) {
  let word = quoteSeparator(quote);

  for (const char in word) {
    if (letterInventory[char] && parseInt(letterInventory[char], 10) > 0) {
      letterInventory[char] = (parseInt(letterInventory[char], 10) - 1).toString();
    } else {
      return false;
    }
  }
  return true;
}
