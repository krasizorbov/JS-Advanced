function solution(steps, lengthInMeters, speedInKPH) {
  let speedInMPS = speedInKPH / 3.6;
  let length = steps * lengthInMeters;
  let breaks = Math.floor(length / 500);
  let time = length / speedInMPS + breaks * 60;
  let hours = Math.floor(time / 3600);
  hours === 0
    ? (hours = "00")
    : hours > 0 && hours < 10
    ? (hours = "0" + hours)
    : hours;
  let minutes = Math.floor(time / 60);
  minutes === 0
    ? (minutes = "00")
    : minutes > 0 && minutes < 10
    ? (minutes = "0" + minutes)
    : minutes;
  let seconds = Math.round(time - minutes * 60);
  seconds === 0
    ? (seconds = "00")
    : seconds > 0 && seconds < 10
    ? (seconds = "0" + seconds)
    : seconds;
  console.log(`${hours}:${minutes}:${seconds}`);
}
solution(4000, 0.6, 5);
