<<<<<<< HEAD
function solve() {
  let task = document.querySelector("#task");
  let description = document.querySelector("#description");
  let date = document.querySelector("#date");
  let addButton = document.querySelector("#add");
  let section = document.querySelectorAll("section");

  let openDiv = section.item(1).querySelectorAll("div").item(1);
  let progresDiv = section.item(2).querySelectorAll("div").item(1);
  let finishDiv = section.item(3).querySelectorAll("div").item(1);

  addButton.addEventListener("click", function (e) {
    e.preventDefault();

    let taskInput = task.value;
    let descriptionInput = description.value;
    let dateInput = date.value;

    if (taskInput !== "" && descriptionInput !== "" && dateInput !== "") {
      let article = document.createElement("article");

      let h3 = document.createElement("h3");
      h3.textContent = taskInput;
      let p1 = document.createElement("p");
      p1.textContent = "Description: " + descriptionInput;
      let p2 = document.createElement("p");
      p2.textContent = "Due Date: " + dateInput;
      let div = document.createElement("div");
      div.classList.add("flex");

      let startBtn = document.createElement("button");
      let deleteBtn = document.createElement("button");
      let finishBtn = document.createElement("button");

      startBtn.classList.add("green");
      deleteBtn.classList.add("red");
      finishBtn.classList.add("orange");

      startBtn.textContent = "Start";
      deleteBtn.textContent = "Delete";
      finishBtn.textContent = "Finish";

      div.appendChild(startBtn);
      div.appendChild(deleteBtn);
      article.appendChild(h3);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(div);
      openDiv.appendChild(article);

      startBtn.addEventListener("click", function () {
        progresDiv.appendChild(article);
        startBtn.remove();
        div.appendChild(finishBtn);
      });

      deleteBtn.addEventListener("click", function () {
        article.remove();
      });

      finishBtn.addEventListener("click", function () {
        finishDiv.appendChild(article);
        div.remove();
      });
    }
  });
}
=======
function solve() {
  let task = document.querySelector("#task");
  let description = document.querySelector("#description");
  let date = document.querySelector("#date");
  let addButton = document.querySelector("#add");
  let section = document.querySelectorAll("section");

  let openDiv = section.item(1).querySelectorAll("div").item(1);
  let progresDiv = section.item(2).querySelectorAll("div").item(1);
  let finishDiv = section.item(3).querySelectorAll("div").item(1);

  addButton.addEventListener("click", function (e) {
    e.preventDefault();

    let taskInput = task.value;
    let descriptionInput = description.value;
    let dateInput = date.value;

    if (taskInput !== "" && descriptionInput !== "" && dateInput !== "") {
      let article = document.createElement("article");

      let h3 = document.createElement("h3");
      h3.textContent = taskInput;
      let p1 = document.createElement("p");
      p1.textContent = "Description: " + descriptionInput;
      let p2 = document.createElement("p");
      p2.textContent = "Due Date: " + dateInput;
      let div = document.createElement("div");
      div.classList.add("flex");

      let startBtn = document.createElement("button");
      let deleteBtn = document.createElement("button");
      let finishBtn = document.createElement("button");

      startBtn.classList.add("green");
      deleteBtn.classList.add("red");
      finishBtn.classList.add("orange");

      startBtn.textContent = "Start";
      deleteBtn.textContent = "Delete";
      finishBtn.textContent = "Finish";

      div.appendChild(startBtn);
      div.appendChild(deleteBtn);
      article.appendChild(h3);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(div);
      openDiv.appendChild(article);

      startBtn.addEventListener("click", function () {
        progresDiv.appendChild(article);
        startBtn.remove();
        div.appendChild(finishBtn);
      });

      deleteBtn.addEventListener("click", function () {
        article.remove();
      });

      finishBtn.addEventListener("click", function () {
        finishDiv.appendChild(article);
        div.remove();
      });
    }
  });
}
>>>>>>> 3d57d3b504772c2f85bda6de1010de4267ef6f34
