function diagonalAttack(input) {
  // split every row
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ");
  }

  let rightDiagonal = 0;
  let leftDiagonal = 0;

  // calculate right diagonal
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (j === i) {
        rightDiagonal += Number(input[i][j]);
      }
    }
  }

  // calculate left diagonal
  for (let i = 0; i <= input.length; i++) {
    for (let j = 0; j <= input.length; j++) {
      if (j === input.length - 1 - i) {
        leftDiagonal += Number(input[i][j]);
      }
    }
  }

  // check if left diagonal is equal to right diagonal and rearange the matrix
  if (leftDiagonal === rightDiagonal) {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (j !== i && j !== input.length - 1 - i) {
          input[i][j] = rightDiagonal;
        }
      }
    }
  }

  // print matrix
  input.forEach((element) => {
    console.log(element.join(" "));
  });
}
diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
