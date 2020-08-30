function solution(input = []) {
  let map = new Map();
  for (const line of input) {
    let [brand, model, quantity] = line.split(" | ");
    quantity = Number(quantity);
    if (!map.has(brand)) {
      map.set(brand, new Map());
    }
    if (!map.get(brand).has(model)) {
      map.get(brand).set(model, 0);
    }
    map.get(brand).set(model, map.get(brand).get(model) + quantity);
  }
  for (const brand of map) {
    console.log(brand[0]);
    for (const [model, quantity] of brand[1]) {
      console.log(`###${model} -> ${quantity}`);
    }
  }
}
solution([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
