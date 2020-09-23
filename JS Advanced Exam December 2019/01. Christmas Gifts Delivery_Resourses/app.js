function solution() {
  let sectionAddInput = document.querySelector("section div input");
  let sectionAddBtn = document.querySelector("section div button");
  let sectionList = document.querySelectorAll("section ul")[0];
  let sectionSent = document.querySelectorAll("section ul")[1];
  let sectionDiscarded = document.querySelectorAll("section ul")[2];

  sectionAddBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (sectionAddInput.value === "") {
      return;
    }
    let li = ce("li", sectionAddInput.value, "gift");
    let sendBtn = ce("button", "Send", "", "sendButton");
    let discardBtn = ce("button", "Discard", "", "discardButton");
    li.appendChild(sendBtn);
    li.appendChild(discardBtn);
    sectionList.appendChild(li);
    sortList(sectionList);
    sectionAddInput.value = "";

    sendBtn.addEventListener("click", function (e) {
      e.preventDefault();
      let text = e.target.parentNode.childNodes[0].textContent;
      let li = ce("li", text, "gift");
      this.parentNode.parentNode.removeChild(this.parentNode);
      sectionSent.appendChild(li);
    });

    discardBtn.addEventListener("click", function (e) {
      e.preventDefault();
      let text = e.target.parentNode.childNodes[0].textContent;
      let li = ce("li", text, "gift");
      this.parentNode.parentNode.removeChild(this.parentNode);
      sectionDiscarded.appendChild(li);
    });
  });

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
