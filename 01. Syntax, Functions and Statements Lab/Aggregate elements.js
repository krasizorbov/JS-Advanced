function solution(input = []) {
  console.log(input.reduce((a, c) => a + c, 0));
  console.log(input.reduce((a, c) => a + 1 / c, 0));
  console.log(input.reduce((a, c) => a + c.toString(), ""));
}
solution([1, 2, 3]);
