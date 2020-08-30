function solution(input = []) {
  let rotations = input.pop();
  for (let i = 0; i < rotations % input.length; i++) {
    input.unshift(input.pop());
  }
  console.log(input.join(" "));
}
solution(["1", "2", "3", "4", "2"]);
