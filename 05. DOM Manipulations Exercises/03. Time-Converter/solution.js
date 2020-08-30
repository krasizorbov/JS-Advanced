function attachEventsListeners() {
  let days = document.querySelector("#days");
  let hours = document.querySelector("#hours");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  let buttons = document.querySelectorAll('input[type="button"]');
  Array.from(buttons).forEach((b) =>
    b.addEventListener("click", function (e) {
      if (e.target.id === "daysBtn") {
        getByDays(days.value);
      } else if (e.target.id === "hoursBtn") {
        getByHours(hours.value);
      } else if (e.target.id === "minutesBtn") {
        getByMinutes(minutes.value);
      } else if (e.target.id === "secondsBtn") {
        getBySeconds(seconds.value);
      }
    })
  );
  function getByDays(x) {
    hours.value = x * 24;
    minutes.value = x * 1440;
    seconds.value = x * 86400;
  }
  function getByHours(x) {
    days.value = x / 24;
    minutes.value = x * 60;
    seconds.value = x * 3600;
  }
  function getByMinutes(x) {
    days.value = x / 24 / 60;
    hours.value = x / 60;
    seconds.value = x * 60;
  }
  function getBySeconds(x) {
    days.value = x / 24 / 3600;
    hours.value = x / 3600;
    minutes.value = x / 60;
  }
}
