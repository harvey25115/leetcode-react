/**
 * Format input to telephone format
 * @returns formattedInput
 */
export default function formatInput(text) {
  let numbersOnly = text.replaceAll(/\D/g, "");
  let newText = numbersOnly;
  if (numbersOnly.length < 3) {
    return newText;
  } else {
    newText = "(" + numbersOnly.substring(0, 3) + ")";
    if (numbersOnly.length > 3) {
      newText += numbersOnly.substring(3, 6);
    }
    if (numbersOnly.length > 6) {
      newText += "-" + numbersOnly.substring(6, 10);
    }
  }
  return newText;
}
