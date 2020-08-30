function solution(n, k) {
  let result = [];
  result.push(1);
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (k >= i) {
      let j = i;
      for (j = result.length - 1; j >= 0; j--) {
        sum += result[j];
      }
      result.push(sum);
      sum = 0;
    } else {
      for (let j = result.length - 1; j >= result.length - k; j--) {
        sum += result[j];
      }
      result.push(sum);
      sum = 0;
    }
  }
  console.log(result.join(" "));
}
solution(6, 3);
