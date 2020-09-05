function solve() {
  let tr = document.querySelectorAll("tbody tr");
  let textInput = document.querySelector("#searchField");
  let searchBtn = document.querySelector("#searchBtn");
  searchBtn.addEventListener("click", function (e) {
    let text = textInput.value;
    for (const r of tr) {
      if (r.textContent.includes(text)) {
        r.classList.add("select");
      } else {
        r.classList = "";
      }
    }
    textInput.value = "";
  });
}
