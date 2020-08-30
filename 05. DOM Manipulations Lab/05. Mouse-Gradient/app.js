function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  let result = document.getElementById("result");
  gradient.addEventListener("mousemove", function (e) {
    let mouseX = e.offsetX;
    let width = e.target.clientWidth;
    let percent = (100 / width) * mouseX;
    result.textContent = `${Math.trunc(percent)}%`;
  });
  document.getElementById("gradient-box").addEventListener("mouseout", () => {
    result.textContent = "";
  });
}
