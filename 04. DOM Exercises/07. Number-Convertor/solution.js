function solve() {
  let selectMenuTo = document.getElementById("selectMenuTo");
  selectMenuTo.childNodes[1].textContent = "Binary";
  selectMenuTo.childNodes[1].value = "binary";
  let option2 = document.createElement("option");
  option2.textContent = "Hexadecimal";
  option2.value = "hexadecimal";
  selectMenuTo.appendChild(option2);
  let input = document.getElementById("input");
  let button = document.getElementsByTagName("button");
  button[0].addEventListener("click", () => {
    const value = selectMenuTo.value;
    const number = input.value;
    if (!value || !number) {
      return;
    }
    document.getElementById("result").value = Number(number)
      .toString(value === "binary" ? 2 : 16)
      .toUpperCase();
  });
}
