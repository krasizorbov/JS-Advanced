function solution(input = []) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let max = Math.max(...input[i]);
    result.push(max);
  }
  console.log(Math.max(...result));
}
solution([
  [20, 50, 10],
  [8, 33, 145],
]);
