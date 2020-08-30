function solution(input = []) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" <-> ");
    let name = line[0];
    let population = +line[1];
    if (!result.hasOwnProperty(name)) {
      result[name] = population;
    } else {
      result[name] += population;
    }
  }
  for (const key in result) {
    console.log(`${key} : ${result[key]}`);
  }
}
solution([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
