function toggle() {
  let b = document.getElementsByClassName("button")[0];
  let text = document.getElementById("extra");
  if (text.style.display === "none") {
    text.style.display = "block";
    b.textContent = "Less";
  } else {
    text.style.display = "none";
    b.textContent = "More";
  }
}
