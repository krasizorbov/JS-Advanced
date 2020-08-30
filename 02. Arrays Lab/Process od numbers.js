function solution(input = []) {
  let result = input
    .filter((el, i) => el * 2, i % 2 !== 0)
    .map((x) => x * 2)
    .reverse();
  console.log(result.join(" "));
}
solution([10, 15, 20, 25]);
