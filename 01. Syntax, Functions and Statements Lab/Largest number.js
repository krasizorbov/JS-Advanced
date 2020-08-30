function solution(a, b, c) {
  let result = [a, b, c];
  let maxNumber = Math.max(...result);
  console.log(`The largest number is ${maxNumber}.`);
}
solution(5, -3, 16);
