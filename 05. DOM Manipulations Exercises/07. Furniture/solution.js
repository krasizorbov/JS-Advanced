function solve() {
  const [input, output] = document.querySelectorAll("textarea");
  const table = document.querySelectorAll("tbody")[0];

  document.querySelectorAll("button")[0].addEventListener("click", () => {
    const json = JSON.parse(input.value);

    json.forEach((el) => {
      const furniture =
        "<tr>" +
        `<td><img src="${el.img}"></td>` +
        `<td><p>${el.name}</p></td>` +
        `<td><p>${el.price}</p></td>` +
        `<td><p>${el.decFactor}</p></td>` +
        `<td><input type="checkbox" /></td>` +
        "</tr>";
      table.insertAdjacentHTML("beforeEnd", furniture);
    });

    input.value = "";
  });

  document.querySelectorAll("button")[1].addEventListener("click", () => {
    const [names, prices, factors] = [[], [], []];
    for (row of table.querySelectorAll("tr")) {
      if (row.querySelectorAll("input")[0].checked) {
        const productInfo = row.querySelectorAll("p");
        names.push(productInfo[0].textContent);
        prices.push(+productInfo[1].textContent);
        factors.push(+productInfo[2].textContent);
      }
    }

    const result = [
      "Bought furniture: " + names.join(", "),
      "Total price: " + prices.reduce((a, c) => a + c, 0).toFixed(2),
      "Average decoration factor: " +
        factors.reduce((a, c) => a + c, 0) / (factors.length || 1),
    ];

    output.value = result.join("\n");
  });
}
