function solve() {
  let tr = document.querySelectorAll("tr");
  let tbody = document.querySelector("tbody");
  tbody.addEventListener("click", highLightRow);

  function highLightRow(e) {
    const change = e.target.parentNode;
    console.log(change);
    if (change.nodeName === "TR") {
      if (change.style.backgroundColor !== "") {
        change.style.backgroundColor = "";
      } else {
        [...tr].forEach((tr) => (tr.style.backgroundColor = ""));
        change.style.backgroundColor = "#413f5e";
      }
    }
  }
}
