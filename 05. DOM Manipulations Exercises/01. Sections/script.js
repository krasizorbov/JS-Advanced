function create(words) {
  let content = document.querySelector("#content");
  for (let i = 0; i < words.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = words[i];
    p.style.display = "none";
    let div = document.createElement("div");
    div.appendChild(p);
    content.appendChild(div);
  }
  let div = document.querySelectorAll("div");
  Array.from(div).forEach((d) =>
    d.addEventListener("click", function (e) {
      if (e.target !== content) {
        e.target.children[0].style.display = "block";
      }
    })
  );
}
