function solution(input = []) {
  let result = new Map();
  for (const line of input) {
    let [name, product, quantity, price] = line.split(/\s->\s|\s:\s/g);
    quantity = Number(quantity);
    price = Number(price);
    let income = quantity * price;
    if (!result.has(name)) {
      result.set(name, new Map());
    }
    if (!result.get(name).has(product)) {
      result.get(name).set(product, income);
    } else {
      result.get(name).set(product, result.get(name).get(product) + income);
    }
  }
  for (const town of result) {
    console.log(`Town - ${town[0]}`);
    for (const product of town[1]) {
      console.log(`$$$${product[0]} : ${product[1]}`);
    }
  }
}
solution([
  "Sofia -> Laptops HP -> 200 : 2000",
  "Sofia -> Raspberry -> 200000 : 1500",
  "Sofia -> Audi Q7 -> 200 : 100000",
  "Montana -> Portokals -> 200000 : 1",
  "Montana -> Qgodas -> 20000 : 0.2",
  "Montana -> Chereshas -> 1000 : 0.3",
]);
