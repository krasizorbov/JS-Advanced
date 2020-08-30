function solution(input) {
  let set = [];
  for (let line of input) {
    let arr = JSON.parse(line);
    set.push(arr.map(Number).sort((a, b) => b - a));
  }
  for (let i = 0; i < set.length; i++) {
    for (let j = i + 1; j < set.length; j++) {
      if (compareArrays(set[i], set[j])) {
        set.splice(j, 1);
        j--;
      }
    }
  }
  set.sort((a, b) => a.length - b.length);
  set.forEach((a) => console.log("[" + a.join(", ") + "]"));
  function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
      return false;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
          return false;
        }
      }
      return true;
    }
  }
}
solution([
  "[7.14, 7.180, 7.339, 80.099]",
  "[7.339, 80.0990, 7.140000, 7.18]",
  "[7.339, 7.180, 7.14, 80.099]",
]);
