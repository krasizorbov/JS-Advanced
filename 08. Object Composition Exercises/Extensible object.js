function solution() {
  let myObj = {
    extend: function (someObj) {
      for (let i of Object.keys(someObj)) {
        if (typeof someObj[i] == "function") {
          Object.getPrototypeOf(myObj)[i] = someObj[i];
        } else {
          myObj[i] = someObj[i];
        }
      }
    },
  };
  return myObj;
}
solution();
