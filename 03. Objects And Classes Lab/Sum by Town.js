function solution(input = []) {
  let result = {};
  for (let i = 0; i < input.length; i += 2) {
    let name = input[i];
    let income = +input[i + 1];
    if (!result.hasOwnProperty(name)) {
      result[name] = income;
    } else {
      result[name] += income;
    }
  }
  console.log(JSON.stringify(result));
}
solution(["Sofia", "20", "Varna", "3", "Sofia", "5", "Varna", "4"]);
