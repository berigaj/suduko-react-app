import { GRID, NUMBERS } from '../../typings'
import {
  identifySquare,
  isInCol,
  isInRow,
  isInSquare,
  shuffle,
} from '../../utils'

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backgracking/recursive function to check all the
 * possible combinations of number solutions found
 *
 * @param grid 9x9 Sudoku Grid
 */
function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        //is  not in grid row?
        if (!isInRow({ grid, row, value })) {
          //is not in grid column?
          if (!isInCol({ col, grid, value })) {
            const square = identifySquare({ col, grid, row })
            if (!isInSquare({})) grid[row][col] = value

            //check if grid is full, if yes, stop and return
            // otherwise run fillGrid(grid)
          }
        }
        break
      }
    }

    grid[row][col] = 0
  }
}

export default fillGrid
