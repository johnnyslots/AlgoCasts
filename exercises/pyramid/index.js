// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {

  for(let i = 1; i <= n + (n-1); i = i+2) {
    let numberOfSpaces = (n + (n-1)) - i
    let currentStr = ''
    let numberOfHashes = 0
    for(let j = 1; j <= n + (n-1); j++) {
      if(j > numberOfSpaces / 2 && numberOfHashes < i) {
        currentStr += '#'
        numberOfHashes++
      }
      else {
        currentStr += ' '
      }
    }
    console.log(currentStr)
  }
}

module.exports = pyramid;


// 1 - 1
// 2 - 3
// 3 - 5
// 4 - 7
// 5 - 9
// 6 - 11

// 1 + 0 = 1
// 2 + 1 = 3
// 3 + 2 = 5
// 4 + 3 = 7
// 5 + 4 = 9
