function solution(input = []) {
  let result = [];
  let first = Math.min(...input);
  result.push(first);
  let firstIndex = input.indexOf(first);
  input.splice(firstIndex, 1);
  let second = Math.min(...input);
  result.push(second);
  let secondIndex = input.indexOf(second);
  input.splice(secondIndex, 1);
  console.log(result.join(" "));
}
solution([30, 15, 50, 5]);
