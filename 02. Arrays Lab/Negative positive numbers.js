function solution(input = []) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0) {
      result.push(input[i]);
    } else {
      result.unshift(input[i]);
    }
  }
  for (const number of result) {
    console.log(number);
  }
}
solution([3, -2, 0, -1]);
