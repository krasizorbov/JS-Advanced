function deleteByEmail() {
  let input = document.getElementsByTagName("input")[0];
  let result = document.getElementById("result");
  let td = document.getElementsByTagName("td");
  for (let i = 0; i < td.length; i++) {
    if (td[i].textContent === input.value) {
      let parent = td[i].parentElement;
      parent.parentNode.removeChild(parent);
      result.textContent = "Deleted.";
      break;
    }
    result.textContent = "Not found.";
  }
}
