function solution(input = []) {
  let matrix = [[], [], []];
  let counter = 0;
  // Initializing the matrix
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      matrix[i][j] = "false";
    }
  }
  // Game logic
  let player = "X";
  for (let i = 0; i < input.length; i++) {
    if (counter === 9) {
      break;
    }
    let [x, y] = input[i].split(" ").map(Number);
    if (matrix[x][y] === "false") {
      matrix[x][y] = player;
      counter++;
      let winning = isWinning(matrix, player);
      if (winning === true) {
        console.log(`Player ${player} wins!`);
        break;
      }
      player === "X"
        ? (player = "O")
        : player === "O"
        ? (player = "X")
        : "pass";
    } else if (matrix[x][y] === "X" || matrix[x][y] === "O") {
      console.log("This place is already taken. Please choose another!");
      continue;
    }
  }
  if (isWinning(matrix, "X") === false && isWinning(matrix, "O") === false) {
    console.log("The game ended! Nobody wins :(");
  }
  // Printing the matrix
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join("\t"));
  }
  // Cheking if there is a winner!
  function isWinning(arr, char) {
    let leftDiagonal = arr[0][0] + arr[1][1] + arr[2][2];
    let rightDiagonal = arr[0][2] + arr[1][1] + arr[2][0];
    const arrayColumn = (a, c) => a.map((x) => x[c]);
    for (let i = 0; i < arr.length; i++) {
      let horizontal = arr[i].reduce((a, c) => a + c, "");
      let column = arrayColumn(arr, i);
      let vertical = column.reduce((a, c) => a + c, "");
      if (
        char.repeat(3) === horizontal ||
        char.repeat(3) === vertical ||
        char.repeat(3) === leftDiagonal ||
        char.repeat(3) === rightDiagonal
      ) {
        return true;
      }
    }
    return false;
  }
}
solution([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
