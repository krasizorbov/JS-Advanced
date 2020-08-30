function solution(input = []) {
  console.log(input.filter((el, i) => i % 2 === 0).join(" "));
}
solution(["20", "30", "40"]);
