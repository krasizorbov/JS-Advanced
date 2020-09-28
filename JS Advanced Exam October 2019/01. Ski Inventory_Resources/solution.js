function solve() {
  let name = document.getElementById("add-new").children[1];
  let quantity = document.getElementById("add-new").children[2];
  let price = document.getElementById("add-new").children[3];
  let addBtn = document.querySelector("#add-new button");
  let inventoryUL = document.getElementById("products").children[1];
  let filterInput = document.getElementById("filter");
  let filterBtn = document.querySelector("#products div button");
  let h1 = document.getElementsByTagName("h1")[1];
  let myProductsUL = document.getElementById("myProducts").children[1];
  let myProductsBuyBtn = document.getElementById("myProducts").children[2];

  addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let li = ce("li");
    let span = ce("span", `${name.value}`);
    let strong1 = ce(
      "strong",
      `Available: ${Number(quantity.value).toFixed()}`
    );
    li.appendChild(span);
    li.appendChild(strong1);
    let div = ce("div");
    let strong2 = ce("strong", `${Number(price.value).toFixed(2)}`);
    let addToClientListBtn = ce("button", `Add to Client's List`);
    div.appendChild(strong2);
    div.appendChild(addToClientListBtn);
    li.appendChild(div);
    inventoryUL.appendChild(li);

    addToClientListBtn.addEventListener("click", function (e) {
      e.preventDefault();
      let qtyAvailable = Number(strong1.textContent.substring(11));
      let total = `${Number(price.value).toFixed(2)}`;
      let li = ce("li");
      let strong = ce("strong", `${total}`);
      li.innerHTML = `${name.value}`;
      li.appendChild(strong);
      myProductsUL.appendChild(li);
      strong1.textContent = `Available: ${qtyAvailable - 1}`;
      qtyAvailable -= 1;
      if (qtyAvailable === 0) {
        e.target.parentNode.parentNode.remove();
      }
      let totalPrice = h1.innerHTML.substring(13);
      h1.innerHTML = `Total Price: ${(
        Number(total) + Number(totalPrice)
      ).toFixed(2)}`;
    });
  });

  filterBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let lis = inventoryUL.children;
    Array.from(lis).forEach((el) => {
      if (
        el.firstChild.textContent
          .toLowerCase()
          .includes(filterInput.value.toLowerCase())
      ) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });
  });

  myProductsBuyBtn.addEventListener("click", () => {
    h1.innerHTML = "Total Price: 0.00";
    myProductsUL.innerHTML = "";
  });

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
