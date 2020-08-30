function solution(a, b, operation) {
  let result = 0;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
    case "**":
      result = a ** b;
      break;
    default:
      break;
  }
  console.log(result);
}
solution(5, 6, "+");
