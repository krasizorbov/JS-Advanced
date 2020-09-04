function solution(input = [], order) {
  if (order === "asc") {
    return asc(input);
  } else {
    return desc(input);
  }

  function asc(arr) {
    return arr.sort((a, b) => a - b);
  }

  function desc(arr) {
    return arr.sort((a, b) => b - a);
  }
}
solution([14, 7, 17, 6, 8], "asc");
solution([14, 7, 17, 6, 8], "desc");
