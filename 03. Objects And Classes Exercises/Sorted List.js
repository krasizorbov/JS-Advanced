class List {
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  add(el) {
    this.arr.push(el);
    this.arr.sort((a, b) => a - b);
    this.size++;
    return this.arr;
  }
  remove(idx) {
    if (idx >= 0 && idx < this.arr.length) {
      this.arr.splice(idx, 1);
      this.size--;
    }
    return this.arr;
  }
  get(idx) {
    if (idx >= 0 && idx < this.arr.length) {
      return this.arr[idx];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
