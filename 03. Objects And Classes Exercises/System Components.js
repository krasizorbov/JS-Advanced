function solution(input = []) {
  let map = new Map();
  for (const line of input) {
    let [system, component, subcomponent] = line.split(" | ");
    if (!map.has(system)) {
      map.set(system, new Map());
    }
    if (!map.get(system).has(component)) {
      map.get(system).set(component, []);
    }
    map.get(system).get(component).push(subcomponent);
  }
  let sortBySystem = [...map].sort(
    (a, b) =>
      b[1].size - a[1].size ||
      a[0].toLowerCase().localeCompare(b[0].toLowerCase())
  );
  for (const system of sortBySystem) {
    console.log(system[0]);
    let sortByComponent = [...system[1]].sort(
      (a, b) => b[1].length - a[1].length
    );
    for (const comp of sortByComponent) {
      console.log(`|||${comp[0]}`);
      comp[1].forEach((el) => console.log(`||||||${el}`));
    }
  }
}
solution([
  "SULS | Main Site | Home Page",
  "SULS | Main Site | Login Page",
  "SULS | Main Site | Register Page",
  "SULS | Judge Site | Login Page",
  "SULS | Judge Site | Submittion Page",
  "Lambda | CoreA | A23",
  "SULS | Digital Site | Login Page",
  "Lambda | CoreB | B24",
  "Lambda | CoreA | A24",
  "Lambda | CoreA | A25",
  "Lambda | CoreC | C4",
  "Indice | Session | Default Storage",
  "Indice | Session | Default Security",
]);
