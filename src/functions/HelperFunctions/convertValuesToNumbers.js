export default function convertValuesToNumbers(obj) {
  const result = {};
  for (const key in obj) {
    result[key] = parseInt(obj[key], 10);
  }
  return result;
}
