function addItem() {
  let item = document.getElementById("newItemText").value;
  let ul = document.getElementById("items");
  let li = document.createElement("li");
  li.innerHTML = item;
  ul.appendChild(li);
  document.getElementById("newItemText").value = "";
}
