function solution() {
  let result = [];
  let count = {};
  for (let i = 0; i < arguments.length; i++) {
    let type = typeof arguments[i];
    let value = arguments[i];
    result.push({ type: type, value: value });
    if (!count.hasOwnProperty(type)) {
      count[type] = 0;
    }
    count[type]++;
  }
  result.forEach((obj) => console.log(`${obj.type}: ${obj.value}`));
  let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  for (const key in sorted) {
    console.log(`${sorted[key][0]} = ${sorted[key][1]}`);
  }
}
solution("cat", 42, function () {
  console.log("Hello world!");
});
