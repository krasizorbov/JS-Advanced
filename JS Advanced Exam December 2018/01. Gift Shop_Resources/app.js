// function solution() {
//   let type = document.getElementById("toyType");
//   let price = document.getElementById("toyPrice");
//   let description = document.getElementById("toyDescription");
//   let addBtn = document.getElementsByTagName("button")[0];
//   let sectionGift = document.getElementById("christmasGiftShop");

//   addBtn.addEventListener("click", function (e) {
//     e.preventDefault();

//     if (type.value && Number(price.value) && description.value) {
//       let div = ce("div", "", "gift");
//       let img = ce("img");
//       img.src = "gift.png";
//       let h2 = ce("h2", type.value);
//       let p = ce("p", description.value);
//       let buyBtn = ce("button", `Buy it for $${price.value}`);

//       buyBtn.addEventListener("click", function (e) {
//         e.target.parentNode.remove();
//       });

//       div.appendChild(img);
//       div.appendChild(h2);
//       div.appendChild(p);
//       div.appendChild(buyBtn);

//       type.value = "";
//       price.value = "";
//       description.value = "";

//       sectionGift.appendChild(div);
//     }
//   });

//   function ce(el, text, className, id) {
//     let e = document.createElement(el);
//     if (text) {
//       e.textContent = text;
//     }
//     if (className) {
//       e.classList = className;
//     }
//     if (id) {
//       e.id = id;
//     }
//     return e;
//   }
// }

function solution() {
  let $type = $("#toyType");
  let $price = $("#toyPrice");
  let $description = $("#toyDescription");
  let $button = $("button");

  //$button.on('click', function () {
  let type = $type.val();
  let price = $price.val();
  let description = $description.val();

  if (type && Number(price) && description) {
    let $div = $("<div>");
    $div.addClass("gift");

    let $img = $("<img>");
    $img.attr("src", "gift.png");
    $div.append($img);

    let $h2 = $("<h2>");
    $h2.text(`${type}`);
    $div.append($h2);

    let $p = $("<p>");
    $p.text(`${description}`);
    $div.append($p);

    let $buyButton = $("<button>");
    $buyButton.text(`Buy it for $${price}`);
    $buyButton.on("click", function (e) {
      let $divParent = e.target.parentElement;
      let $sectionParent = $divParent.parentElement;
      $sectionParent.remove($divParent);
    });
    $div.append($buyButton);

    let $section = $("#christmasGiftShop");
    $section.append($div);
  }

  $type.val("");
  $price.val("");
  $description.val("");
  //});
}
