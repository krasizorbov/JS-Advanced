function solution(input) {
  let arr = [...input.toString()];
  console.log(arr.every((el, i, arr) => el === arr[0]));
  console.log(arr.reduce((a, c) => a + Number(c), 0));
}
solution(2222222);
