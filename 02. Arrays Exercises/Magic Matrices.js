function solution(input = []) {
  let sum = input[0].reduce((a, c) => a + c, 0);
  const arrayColumn = (arr, n) => arr.map((x) => x[n]);
  let isValid = true;
  for (let i = 0; i < input.length; i++) {
    let column = arrayColumn(input, i);
    let verticalSum = column.reduce((a, c) => a + c, 0);
    let horizontalSum = input[i].reduce((a, c) => a + c, 0);
    if (sum !== verticalSum || sum !== horizontalSum) {
      isValid = false;
      console.log("false");
      return;
    }
  }
  console.log("true");
}
solution([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
