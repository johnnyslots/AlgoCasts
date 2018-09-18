// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

  let spiral = []
  for(let i = 0; i < n; i++) {
    spiral.push([])
  }
  let startRow = 0
  let endRow = n-1
  let startCol = 0
  let endCol = n-1
  let counter = 1


  while(startCol <= endCol && startRow <= endRow) {
    for(let i = startCol; i <= endCol; i++) {
      spiral[startRow][i] = counter
      counter++
    }
    startRow++
    for(let i = startRow; i <= endRow; i++) {
      spiral[i][endCol] = counter
      counter++
    }
    endCol--
    for(let i = endCol; i >= startCol; i--) {
      spiral[endRow][i] = counter
      counter++
    }
    endRow--
    for(let i = endRow; i >= startRow; i--) {
      spiral[i][startCol] = counter
      counter++
    }
    startCol++
  }
  return spiral
}

module.exports = matrix;


// put everything in hash, marked true or false depending on visit
// loop right until end or until hitting previously visited element
// then loop down
// then loop left
// then loop up
// if can't loop in any direction, return


// [[1,2,3,4,5,6],
// [7],
// [8],
// [9],
// [10],
// []]
