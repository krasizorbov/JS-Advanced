function solution(input = []) {
  let fruits = {};
  let map = new Map();
  for (const line of input) {
    let [name, quantity] = line.split(" => ");
    quantity = Number(quantity);
    if (!fruits.hasOwnProperty(name)) {
      fruits[name] = quantity;
    } else {
      fruits[name] += quantity;
    }
    if (fruits[name] >= 1000) {
      let bottles = Math.floor(fruits[name] / 1000);
      fruits[name] -= bottles * 1000;
      if (!map.has(name)) {
        map.set(name, bottles);
      } else {
        let currentCount = map.get(name);
        currentCount += bottles;
        map.set(name, currentCount);
      }
    }
  }
  for (const m of map) {
    console.log(`${m[0]} => ${m[1]}`);
  }
}

solution([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
