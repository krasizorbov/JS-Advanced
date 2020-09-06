function solve() {
  let player1 = document.getElementById("player1Div").querySelectorAll("img");
  let player2 = document.getElementById("player2Div").querySelectorAll("img");
  let [firstSpan, vs, secondSpan] = document.querySelectorAll("span");
  const history = document.getElementById("history");

  let card1 = null;
  let card2 = null;
  let name1 = 0;
  let name2 = 0;
  Array.from(player1).forEach((p) =>
    p.addEventListener("click", function (e) {
      e.target.src = "images/whiteCard.jpg";
      firstSpan.textContent = e.target.name;
      secondSpan.textContent = "";
      name1 = Number(e.target.name);
      card1 = e.target;
      if (card1 !== null && card2 !== null) {
        play();
        card1 = null;
        card2 = null;
      }
    })
  );

  Array.from(player2).forEach((p) =>
    p.addEventListener("click", function (e) {
      e.target.src = "images/whiteCard.jpg";
      secondSpan.textContent = e.target.name;
      firstSpan.textContent = "";
      name2 = Number(e.target.name);
      card2 = e.target;
      if (card1 !== null && card2 !== null) {
        play();
        card1 = null;
        card2 = null;
      }
    })
  );

  function play() {
    if (name1 > name2 && card1 !== null && card2 !== null) {
      card1.style = "border: 2px solid green;";
      card2.style = "border: 2px solid red;";
    } else if (name1 < name2 && card1 !== null && card2 !== null) {
      card1.style = "border: 2px solid red;";
      card2.style = "border: 2px solid green;";
    } else if (name1 === name2 && card1 !== null && card2 !== null) {
      card1.style = "";
      card2.style = "";
    }
    history.textContent += `[${card1.name} vs ${card2.name}] `;
  }
}
