function solution(input = []) {
  let result = {};
  for (const line of input) {
    let [name, price] = line.split(" : ");
    let letter = name[0];
    price = Number(price);
    if (!result.hasOwnProperty(letter)) {
      result[letter] = [];
    }
    result[letter].push({ name: name, price: price });
  }
  let sortByFirstLetter = Object.entries(result).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (let i = 0; i < sortByFirstLetter.length; i++) {
    console.log(sortByFirstLetter[i][0]);
    let sortByName = sortByFirstLetter[i][1].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    sortByName.forEach((obj) => console.log(`  ${obj.name}: ${obj.price}`));
  }
}
solution([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
