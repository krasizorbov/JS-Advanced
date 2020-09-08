function solve() {
  let input = document.querySelectorAll("input");
  let [quickCheck, clear] = document.querySelectorAll("button");
  let table = document.querySelector("table");
  let p = document.querySelector("#check > p");

  clear.addEventListener("click", function () {
    p.textContent = "";
    table.style.border = "none";
    [...input].forEach((el) => (el.value = ""));
  });

  quickCheck.addEventListener("click", function () {
    let matrix = new Array(3);
    for (let i = 0; i < matrix.length; i++) {
      matrix[i] = new Array(3);
    }

    matrix[0][0] = input[0].value;
    matrix[0][1] = input[1].value;
    matrix[0][2] = input[2].value;

    matrix[1][0] = input[3].value;
    matrix[1][1] = input[4].value;
    matrix[1][2] = input[5].value;

    matrix[2][0] = input[6].value;
    matrix[2][1] = input[7].value;
    matrix[2][2] = input[8].value;

    isSudomu = true;
    for (let i = 1; i < matrix.length; i++) {
      let row = matrix[i];
      let col = matrix.map((row) => row[i]);
      if (
        col.length != [...new Set(col)].length ||
        row.length != [...new Set(row)].length
      ) {
        isSudomu = false;
        break;
      }
    }
    if (isSudomu) {
      table.style.border = "2px solid green";
      p.style.color = "green";
      p.textContent = "You solve it! Congratulations!";
    } else {
      table.style.border = "2px solid red";
      p.style.color = "red";
      p.textContent = "NOP! You are not done yet...";
    }
  });
}
