function solution(input = []) {
  let sum = input[0].reduce((a, c) => a + c, 0);
  const arrayColumn = (arr, n) => arr.map((x) => x[n]);
  for (let i = 0; i < input.length; i++) {
    let column = arrayColumn(input, i);
    let verticalSum = column.reduce((a, c) => a + c, 0);
    let horizontalSum = input[i].reduce((a, c) => a + c, 0);
    if (sum !== verticalSum || sum !== horizontalSum) {
      console.log("false");
      return;
    }
  }
  console.log("true");
}
// Решение на Vkirovpz
// function solution(input) {
//   let arr = [];
//   let rowSum = 0;
//   let colSum = 0;
//   let sum = input[0].reduce((a, c) => a + c, 0);
//   // filling the matrix
//   for (let row = 0; row < input.length; row++) {
//     arr.push(input[row]);
//   }

//   for (let row = 0; row < arr.length; row++) {
//     rowSum = arr[row].reduce((curr, next) => curr + next, 0);

//     for (let col = 0; col < arr.length; col++) {
//       colSum += arr[col][row];
//     }

//     if (sum !== rowSum || sum !== colSum) {
//       console.log("false");
//       return;
//     } else {
//       colSum = 0;
//     }
//   }
//   console.log("true");
// }
solution([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
