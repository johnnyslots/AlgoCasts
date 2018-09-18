// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const stringAChars = {}
  const stringBChars = {}
  let i = 0
  while(i <= stringA.length && i <= stringB.length) {
    if(stringA[i] && stringA[i].match(/[a-z]/i)) {
      let currentA = stringA[i].toLowerCase()
      if(currentA in stringAChars) {
        stringAChars[currentA]++
      }
      else {
        stringAChars[currentA] = 1
      }
    }
    if(stringB[i] && stringB[i].match(/[a-z]/i)) {
      let currentB = stringB[i].toLowerCase()
      if(currentB in stringBChars) {
        stringBChars[currentB]++
      }
      else {
        stringBChars[currentB] = 1
      }
    }
    i++
  }
  if(Object.keys(stringAChars).length !== Object.keys(stringBChars).length) {
    return false
  }
  for(let key in stringAChars) {
    if(stringAChars[key] !== stringBChars[key]) return false
  }
  return true
}

module.exports = anagrams;
