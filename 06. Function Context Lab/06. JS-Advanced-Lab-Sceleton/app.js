function solve() {
  const box = document.querySelector("#box");
  let dropDown = document.querySelector("#dropdown");
  let dropDownList = document.querySelector("#dropdown-ul");

  dropDown.addEventListener("click", () => {
    if (
      dropDownList.style.display === "" ||
      dropDownList.style.display === "none"
    ) {
      dropDownList.style.display = "block";
    } else {
      dropDownList.style.display = "none";
    }
    if (dropDownList.style.display === "none") {
      box.style.backgroundColor = "black";
      box.style.color = "white";
    }
  });

  Array.from(dropDownList.querySelectorAll("li")).forEach((el) =>
    el.addEventListener("click", function (e) {
      box.style.backgroundColor = e.target.textContent;
      box.style.color = "black";
    })
  );
}
