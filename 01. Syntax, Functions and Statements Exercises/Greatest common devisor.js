function solution(a, b) {
  let min = Math.min(a, b);
  let result = 1;
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }
  console.log(result);
}
solution(15, 5);
