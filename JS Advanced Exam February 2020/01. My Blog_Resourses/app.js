function solve() {
  let author = document.getElementById("creator");
  let title = document.getElementById("title");
  let category = document.getElementById("category");
  let content = document.getElementById("content");
  let article = document.querySelector("h2");
  let createBtn = document.querySelector(".btn.create");

  createBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      author.value === "" ||
      title.value === "" ||
      category.value === "" ||
      content.value === ""
    ) {
      return;
    }
    let art = ce("article");
    let h1 = ce("h1", `${title.value}`);
    art.appendChild(h1);

    let p1 = ce("p", "Category:");
    let strong1 = ce("strong", `${category.value}`);
    p1.appendChild(strong1);
    art.appendChild(p1);

    let p2 = ce("p", "Creator:");
    let strong2 = ce("strong", `${author.value}`);
    p2.appendChild(strong2);
    art.appendChild(p2);

    let con = ce("p", `${content.value}`);
    art.appendChild(con);

    let divButtons = ce("div", "", "buttons");
    let deleteBtn = ce("button", "Delete");
    deleteBtn.classList.add("btn", "delete");
    let archiveBtn = ce("button", "Archive");
    archiveBtn.classList.add("btn", "archive");
    divButtons.appendChild(deleteBtn);
    divButtons.appendChild(archiveBtn);
    art.appendChild(divButtons);

    deleteBtn.addEventListener("click", remove);

    archiveBtn.addEventListener("click", function (e) {
      let parent = e.target.parentNode.parentNode;
      let name = parent.querySelector("h1").textContent;
      let li = ce("li", name);
      let ul = document.querySelector("ul");
      ul.appendChild(li);
      sortList(ul);
      remove(e);
    });

    document.querySelector("main section").appendChild(art);
  });

  function remove(e) {
    e.target.parentElement.parentElement.remove();
  }

  function sortList(ul) {
    let sorted = Array.from(ul.getElementsByTagName("li")).sort((a, b) =>
      a.textContent.localeCompare(b.textContent)
    );
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    sorted.forEach((li) => ul.appendChild(li));
  }

  function ce(el, text, className, id) {
    let e = document.createElement(el);
    if (text) {
      e.textContent = text;
    }
    if (className) {
      e.classList = className;
    }
    if (id) {
      e.id = id;
    }
    return e;
  }
}
