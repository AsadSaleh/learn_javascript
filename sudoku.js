function solveSudoku(board) {
  if (solve(board)) {
    return board;
  }
  return "No solution exists.";
}

function solve(board) {
  const emptySpot = findEmptySpot(board);
  if (!emptySpot) {
    return true; // Puzzle solved successfully
  }

  const [row, col] = emptySpot;
  for (let num = 1; num <= 9; num++) {
    if (isValidMove(board, row, col, num)) {
      board[row][col] = num;

      if (solve(board)) {
        return true; // Move successful
      }

      // Undo the move
      board[row][col] = 0;
    }
  }
  return false; // Backtrack
}

function findEmptySpot(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
}

function isValidMove(board, row, col, num) {
  return (
    isRowValid(board, row, num) &&
    isColValid(board, col, num) &&
    isBoxValid(board, row - (row % 3), col - (col % 3), num)
  );
}

function isRowValid(board, row, num) {
  for (let col = 0; col < 9; col++) {
    if (board[row][col] === num) {
      return false;
    }
  }
  return true;
}

function isColValid(board, col, num) {
  for (let row = 0; row < 9; row++) {
    if (board[row][col] === num) {
      return false;
    }
  }
  return true;
}

function isBoxValid(board, startRow, startCol, num) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row + startRow][col + startCol] === num) {
        return false;
      }
    }
  }
  return true;
}

// Example Sudoku puzzle
const sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

console.log(solveSudoku(sudokuBoard));
