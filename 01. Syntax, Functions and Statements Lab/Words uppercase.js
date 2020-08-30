function solution(input) {
  input = input.toUpperCase();
  let pattern = /[A-Za-z0-9]+/g;
  let result = [...input.match(pattern)];
  if (result !== null) {
    console.log(result.join(", "));
  }
}
solution("Hi, how are you?");
