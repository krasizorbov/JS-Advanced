function solve() {
  const name = document.querySelectorAll("input")[0];
  const year = document.querySelectorAll("input")[1];
  let price = document.querySelectorAll("input")[2];
  const addBtn = document.getElementsByTagName("button")[0];
  const sectionOld = document.querySelectorAll("section div")[0];
  const sectionNew = document.querySelectorAll("section div")[1];
  let h1 = document.querySelectorAll("h1")[1];

  addBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (
      name.value === "" ||
      Number.isNaN(Number(year.value)) ||
      Number.isNaN(Number(price.value)) ||
      year.value <= 0 ||
      price.value <= 0
    ) {
      return;
    } else {
      if (Number(year.value) >= 2000) {
        let div = ce("div", "", "book");
        let p = ce("p", `${name.value} [${year.value}]`);
        let pr = Number(price.value);
        let buyBtn = ce("button", `Buy it only for ${pr.toFixed(2)} BGN`);
        let oldBtn = ce("button", "Move to old section");
        div.appendChild(p);
        div.appendChild(buyBtn);
        div.appendChild(oldBtn);
        sectionNew.appendChild(div);

        oldBtn.addEventListener("click", function (e) {
          e.preventDefault();
          let parent = e.target.parentNode;
          let pattern = /\d+\.?\d{0,2}/g;
          let text = parent.children[1].textContent;
          let reducedPrice = (Number(text.match(pattern)[0]) * 0.85).toFixed(2);
          parent.children[1].textContent = `Buy it only for ${reducedPrice} BGN`;
          parent.children[2].remove();
          sectionOld.appendChild(parent);
        });

        buyBtn.addEventListener("click", (e) => {
          buy(e);
        });
      } else {
        let div = ce("div", "", "book");
        let p = ce("p", `${name.value} [${year.value}]`);
        let reducedPrice = price.value * 0.85;
        let buyBtn = ce(
          "button",
          `Buy it only for ${reducedPrice.toFixed(2)} BGN`
        );
        div.appendChild(p);
        div.appendChild(buyBtn);
        sectionOld.appendChild(div);

        buyBtn.addEventListener("click", (e) => {
          buy(e);
        });
      }
    }
  });

  function buy(e) {
    e.preventDefault();
    let parent = e.target.parentNode;
    let pattern = /\d+\.?\d{0,2}/g;
    let text = parent.children[1].textContent;
    let price = Number(text.match(pattern)[0]).toFixed(2);
    let h1Text = h1.textContent;
    let total = Number(h1Text.match(pattern)[0]);
    h1.textContent = `Total Store Profit: ${(
      Number(total) + Number(price)
    ).toFixed(2)} BGN`;
    parent.remove();
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
