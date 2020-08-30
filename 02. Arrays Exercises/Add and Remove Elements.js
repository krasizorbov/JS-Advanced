function solution(input = []) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    input[i] === "add" ? result.push(i + 1) : result.pop();
  }
  result.length > 0
    ? result.forEach((el) => console.log(el))
    : console.log("Empty");
}
solution(["add", "add", "add", "add"]);
