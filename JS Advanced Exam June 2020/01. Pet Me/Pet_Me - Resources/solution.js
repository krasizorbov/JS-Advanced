function solve() {
  let input = document.querySelectorAll("input[type='text']");
  let addBtn = document.querySelector("button");
  let section = document.querySelectorAll("section");
  let adoption = section[0];
  let ulAdoption = adoption.children[1];
  let adopted = section[1];
  let ulAdopted = adopted.children[1];

  let name = input[0];
  let age = input[1];
  let kind = input[2];
  let owner = input[3];

  addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      name.value === "" ||
      age.value === "" ||
      kind.value === "" ||
      owner.value === "" ||
      Number.isNaN(Number(age.value))
    ) {
      return;
    }
    let li = document.createElement("li");
    let p = document.createElement("p");
    let strong1 = document.createElement("strong");
    strong1.textContent = name.value;
    let strong2 = document.createElement("strong");
    strong2.textContent = age.value;
    let strong3 = document.createElement("strong");
    strong3.textContent = kind.value;
    let span = document.createElement("span");
    span.textContent = "Owner: " + owner.value;
    let button = document.createElement("button");
    button.textContent = "Contact with owner";
    p.appendChild(strong1);
    p.innerHTML += " is a ";
    p.appendChild(strong2);
    p.innerHTML += " year old ";
    p.appendChild(strong3);
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(button);
    ulAdoption.appendChild(li);

    name.value = "";
    age.value = "";
    kind.value = "";
    owner.value = "";

    button.addEventListener("click", function (e) {
      let div = document.createElement("div");
      let input = document.createElement("input");
      input.placeholder = "Enter your names";
      let changeBtn = document.createElement("button");
      changeBtn.textContent = "Yes! I take it!";

      div.appendChild(input);
      div.appendChild(changeBtn);
      li.appendChild(div);
      e.target.remove();

      changeBtn.addEventListener("click", function (e) {
        if (input.value !== "") {
          let newspan = document.createElement("span");
          newspan.textContent = "New Owner: " + input.value;
          let checkedBtn = document.createElement("button");
          checkedBtn.textContent = "Checked";
          let parentDiv = e.target.parentNode;
          let parent = parentDiv.parentNode;
          parentDiv.removeChild(input);
          parentDiv.removeChild(changeBtn);
          parent.removeChild(parentDiv);
          parent.removeChild(span);
          parent.appendChild(newspan);
          parent.appendChild(checkedBtn);
          ulAdopted.appendChild(parent);
          e.target.remove();

          checkedBtn.addEventListener("click", function (e) {
            parent.remove();
          });
        }
      });
    });
  });
}
