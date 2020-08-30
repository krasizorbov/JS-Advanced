function solve() {
  const clickElement = (i) => {
    const paragraphs = document.getElementsByTagName("p");
    const p = paragraphs[i];
    const increaseNum = Number(p.textContent.match(/\d+/g)) + 1;
    p.innerHTML = `visited ${increaseNum} times`;
  };
  const a = document.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", () => clickElement(i));
  }
}
