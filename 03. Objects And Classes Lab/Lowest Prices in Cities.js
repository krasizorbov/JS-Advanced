function solution(input = []) {
  let result = new Map();
  for (let i = 0; i < input.length; i++) {
    let [town, product, price] = input[i].split(" | ");
    if (!result.get(product)) {
      result.set(product, new Map());
    }
    result.get(product).set(town, +price);
  }
  for (const r of result) {
    let sorted = [...r[1]].sort((a, b) => a[1] - b[1])[0];
    console.log(`${r[0]} -> ${sorted[1]} (${sorted[0]})`);
  }
}
solution([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
