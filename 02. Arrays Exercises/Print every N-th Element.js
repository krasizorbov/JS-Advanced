function solution(input = []) {
  let step = +input.pop();
  for (let i = 0; i < input.length; i += step) {
    console.log(input[i]);
  }
}
solution(["5", "20", "31", "4", "20", "2"]);
