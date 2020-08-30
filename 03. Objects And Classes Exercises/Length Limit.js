class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }
  increase(length) {
    this.innerLength += length;
    return this.innerLength;
  }
  decrease(length) {
    if (this.innerLength - length < 0) {
      this.innerLength = 0;
    } else {
      this.innerLength -= length;
    }
    return this.innerLength;
  }
  toString() {
    let str = this.innerString.slice(0);
    if (this.innerString.length > this.innerLength) {
      str = str.substring(0, this.innerLength) + "...";
    }
    return str;
  }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
