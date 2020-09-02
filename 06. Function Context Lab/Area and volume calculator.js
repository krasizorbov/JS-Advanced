function solution(area, vol, input = []) {
  function area() {
    return this.x * this.y;
  }
  function vol() {
    return this.x * this.y * this.z;
  }
}
solution(area, vol, [
  { x: "1", y: "2", z: "10" },
  { x: "7", y: "7", z: "10" },
  { x: "5", y: "2", z: "10" },
]);
