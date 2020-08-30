function solution(array = []) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (i >= 0 && i + 1 < array.length) {
        if (array[i][j] === array[i + 1][j]) {
          counter++;
        }
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (j >= 0 && j + 1 < array[i].length) {
        if (array[i][j] === array[i][j + 1]) {
          counter++;
        }
      }
    }
  }
  console.log(counter);
}
solution([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
