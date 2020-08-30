function solution(input) {
  function createRectangle(width, height) {
    let obj = {
      width: width,
      height: height,
      area: function () {
        return obj.width * obj.height;
      },
      compareTo: function (other) {
        return other.area() - obj.area() || other.width - obj.width;
      },
    };
    return obj;
  }
  let result = [];
  for (let [width, height] of input) {
    result.push(createRectangle(width, height));
  }
  let sorted = result.sort((a, b) => a.compareTo(b));
  return sorted;
}
solution([
  [10, 5],
  [5, 12],
]);
