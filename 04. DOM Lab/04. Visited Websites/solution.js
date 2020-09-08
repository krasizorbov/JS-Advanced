function solve() {
  let a = document.querySelectorAll("a");
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function (e) {
      let p = document.querySelectorAll("p");
      p = p[i];
      const increaseNum = Number(p.innerHTML.match(/\d+/g)) + 1;
      p.innerHTML = `visited ${increaseNum} times`;
    });
  }
}
