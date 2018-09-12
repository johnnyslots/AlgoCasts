// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCount = {}
  let mostCommonCount = -Infinity
  let mostCommonChar
  for(const char of str) {
    if(char in charCount) {
      charCount[char]++
    }
    else {
      charCount[char] = 1
    }
    if(charCount[char] > mostCommonCount) {
      mostCommonCount = charCount[char]
      mostCommonChar = char
    }
  }
  return mostCommonChar
}

module.exports = maxChar;
