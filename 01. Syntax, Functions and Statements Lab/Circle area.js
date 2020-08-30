function solution(radius) {
  let type = typeof radius;
  let area = 0;
  if (type === "number") {
    area = Math.PI * radius * radius;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
solution(true);
