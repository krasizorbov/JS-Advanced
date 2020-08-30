function solution(length) {
  var arr = [];
  if (typeof length === "undefined") {
    length = 5;
  }
  for (var x = 0; x < length; x++) {
    arr[x] = [];
    for (var y = 0; y < length; y++) {
      arr[x][y] = "*";
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(" "));
  }
}
solution(2);
