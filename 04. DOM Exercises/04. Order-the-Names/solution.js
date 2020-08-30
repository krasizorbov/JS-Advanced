function solve() {
  let map = new Map();
  let count = 0;
  for (let i = 65; i <= 90; i++) {
    map.set(String.fromCharCode(i), count);
    count++;
  }
  let b = document.getElementsByTagName("button")[0];
  let lis = document.querySelectorAll("li");
  b.addEventListener("click", () => {
    let input = document.getElementsByTagName("input")[0].value;
    input = input[0].toUpperCase() + input.slice(1).toLowerCase();
    let firstLetter = String.fromCharCode(input.charCodeAt(0));
    let num = map.get(firstLetter);
    let name = lis[num].innerText;
    if (name !== "") {
      lis[num].innerText += ", " + input;
    } else {
      lis[num].innerText = input;
    }
    input = "";
    document.getElementsByTagName("input")[0].value = "";
  });
}
