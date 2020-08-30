function solution(input) {
  let result = [input[0]];
  for (let i = 1; i < input.length; i++) {
    let current = result[result.length - 1];
    if (current <= input[i]) {
      result.push(input[i]);
    }
  }
  console.log(result.join("\n"));
}
solution([1, 3, 8, 4, 10, 12, 3, 2, 24]);
