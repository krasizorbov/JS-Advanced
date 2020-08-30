function addItem() {
  let text = document.getElementById("newItemText");
  let value = document.getElementById("newItemValue");
  const option = document.createElement("option");
  option.value = value.value;
  option.textContent = text.value;
  document.getElementById("menu").appendChild(option);
  text.value = "";
  value.value = "";
}
