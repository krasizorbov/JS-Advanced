function solution(dayName) {
  let daysOfWeek = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };
  if (daysOfWeek.hasOwnProperty(dayName)) {
    console.log(daysOfWeek[dayName]);
  } else {
    console.log("error");
  }
}
solution("Monday");
