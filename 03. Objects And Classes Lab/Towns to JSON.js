function solution(input) {
  let towns = [];
  for (let town of input.slice(1)) {
    let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
    let obj = {
      Town: townName,
      Latitude: parseFloat(parseFloat(lat).toFixed(2).toString()),
      Longitude: parseFloat(parseFloat(lng).toFixed(2).toString()),
    };
    towns.push(obj);
  }
  console.log(JSON.stringify(towns));
}
solution([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
