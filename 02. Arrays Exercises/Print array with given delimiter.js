function solution(input = []) {
  let delimiter = input.pop();
  console.log(input.join(delimiter));
}
solution(["One", "Two", "Three", "Four", "Five", "-"]);
