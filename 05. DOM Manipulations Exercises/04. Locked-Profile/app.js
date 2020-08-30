function lockedProfile() {
  let buttons = document.querySelectorAll("button");
  Array.from(buttons).forEach((b) =>
    b.addEventListener("click", function (e) {
      let radioLock = e.target.parentNode.querySelector('input[value="lock"]');
      if (!radioLock.checked && b.textContent === "Show more") {
        e.target.parentNode.querySelector("div").style.display = "block";
        b.textContent = "Hide it";
        return;
      }
      if (!radioLock.checked && b.textContent === "Hide it") {
        e.target.parentNode.querySelector("div").style.display = "none";
        b.textContent = "Show more";
        return;
      }
    })
  );
}
