function stopwatch() {
  let buttons = document.querySelectorAll("button");
  const timer = document.getElementById("time");
  let counter = 0;
  let startTimer;
  Array.from(buttons).forEach((b) =>
    b.addEventListener("click", function (e) {
      if (e.target.id === "startBtn") {
        timer.textContent = "00:00";
        startTimer = setInterval(() => {
          counter += 1;
          const seconds = counter % 60;
          const minutes = Math.floor(counter / 60);
          timer.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds
          }`;
        }, 1000);
        document.getElementById("startBtn").disabled = true;
        document.getElementById("stopBtn").disabled = false;
      } else {
        clearInterval(startTimer);
        counter = 0;
        document.getElementById("startBtn").disabled = false;
        document.getElementById("stopBtn").disabled = true;
      }
    })
  );
}
