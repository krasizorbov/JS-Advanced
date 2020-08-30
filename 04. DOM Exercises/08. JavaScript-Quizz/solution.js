function solve() {
  let correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];
  let index = 0;
  let correctCount = 0;
  [...document.querySelectorAll(".answer-text")].map((x) =>
    x.addEventListener("click", function next(el) {
      if (el.target.textContent === correctAnswers[index]) {
        correctCount++;
      }
      document.querySelectorAll("section")[index++].style.display = "none";
      if (document.querySelectorAll("section")[index]) {
        let next = document.querySelectorAll("section")[index];
        next.style.display = "block";
      } else {
        document.querySelector("#results").style.display = "block";
        document.querySelector("#results h1").textContent =
          correctCount === correctAnswers.length
            ? "You are recognized as top JavaScript fan!"
            : `You have ${correctCount} right answers`;
      }
    })
  );
}
