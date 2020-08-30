function notify(message) {
  let notify = document.querySelector("#notification");
  notify.innerHTML = message;
  notify.style.display = "block";
  setTimeout(() => {
    notify.style.display = "none";
  }, 2000);
}
