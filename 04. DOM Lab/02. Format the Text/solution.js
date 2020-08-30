function solve() {
  let input = document.getElementById("input");
  let splitInput = input.innerHTML.split(".");
  splitInput = splitInput.slice(0, splitInput.length - 1);
  let section = document.getElementById("output");
  for (let i = 0; i < splitInput.length; i++) {
    let p = document.createElement("p");
    for (let j = 0; j < 3; j++) {
      if (i === splitInput.length) {
        break;
      }
      p.innerHTML += splitInput[i] + ".";
      i++;
    }
    i--;
    section.appendChild(p);
  }
}
