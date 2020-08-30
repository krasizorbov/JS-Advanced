function solution(input = []) {
  let result = [];
  for (const line of input) {
    let [name, level, items] = line.split(" / ");
    level = Number(level);
    items ? (items = items.split(", ")) : (items = []);
    result.push({ name, level, items });
  }
  console.log(JSON.stringify(result));
}
solution([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
