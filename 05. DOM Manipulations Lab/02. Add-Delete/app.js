function solve() {
  let item = document.getElementById("newText");
  let ul = document.getElementById("items");
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.textContent = "[Delete]";
  a.href = "#";
  li.textContent = item.value;
  li.appendChild(a);
  ul.appendChild(li);
  a.addEventListener("click", function () {
    ul.removeChild(li);
  });
  item.value = "";
}
