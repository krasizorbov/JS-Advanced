function solution(input = []) {
  let sum1 = 0;
  let sum2 = 0;
  let result = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (i === j) {
        sum1 += input[i][j];
      }
      if (i + j === input[i].length - 1) {
        sum2 += input[i][j];
      }
    }
  }
  result.push(sum1);
  result.push(sum2);
  console.log(result.join(" "));
}
solution([
  [20, 40, 10],
  [10, 60, 20],
  [10, 60, 20],
]);
