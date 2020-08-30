function solution(input = []) {
  let obj = { motorway: 130, interstate: 90, city: 50, residential: 20 };
  let type = input[1];
  let speed = input[0];
  if (obj.hasOwnProperty(type) && speed > obj[type]) {
    if (obj[type] + 20 >= speed) {
      console.log("speeding");
    } else if (obj[type] + 40 >= speed) {
      console.log("excessive speeding");
    } else {
      console.log("reckless driving");
    }
  }
}
solution([91, "city"]);
