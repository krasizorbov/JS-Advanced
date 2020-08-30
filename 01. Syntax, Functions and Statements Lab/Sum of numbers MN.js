function solution(a, b) {
  const x = Number(a);
  const y = Number(b);
  let sum = 0;
  for (let i = x; i <= y; i++) {
    sum += i;
  }
  console.log(sum);
}
solution("1", "5");
