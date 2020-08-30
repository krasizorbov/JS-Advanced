// function solve() {
//   let button = document.getElementsByTagName("button");
//   let textArea = document.getElementsByTagName("textarea")[0];
//   let check = document.querySelector(".checkout");
//   let totalPrice = 0;
//   let list = [];
//   [...button].forEach((p) =>
//     p.addEventListener("click", (e) => {
//       if (e.target.className === "add-product") {
//         let current = e.target.parentElement;
//         let price = current.nextElementSibling.innerHTML;
//         let name = current.previousElementSibling.children[0].innerHTML;
//         if (!list.includes(name)) {
//           list.push(name);
//         }
//         totalPrice += +price;
//         textArea.value += `Added ${name} for ${price} to the cart.\n`;
//       }
//     })
//   );
//   check.addEventListener("click", function () {
//     textArea.value += `You bought ${list.join(", ")} for ${totalPrice.toFixed(
//       2
//     )}.`;
//     let buttons = Array.from(document.querySelectorAll("button"));
//     buttons.forEach((button) => (button.disabled = true));
//   });
// }
function solve() {
  let products = document.getElementsByClassName("product");
  let textArea = document.getElementsByTagName("textarea")[0];
  let check = document.querySelector(".checkout");
  let totalPrice = 0;
  let productList = [];

  Array.from(products).forEach((p) =>
    p.addEventListener("click", function () {
      let name = p.getElementsByClassName("product-title")[0].textContent;
      let price = p.getElementsByClassName("product-line-price")[0].textContent;
      if (!productList.includes(name)) {
        productList.push(name);
      }
      totalPrice += +price;
      textArea.value += `Added ${name} for ${price} to the cart.\n`;
    })
  );
  check.addEventListener("click", function () {
    let list = productList.join(", ");
    totalPrice = totalPrice.toFixed(2);
    textArea.value += `You bought ${list} for ${totalPrice}.`;
    let buttons = Array.from(document.querySelectorAll("button"));
    buttons.forEach((button) => (button.disabled = true));
  });
}
