function solution(target, func) {
  let originalFunc = target[func];
  let result = { count: 0 };
  target[func] = function () {
    result.count++;
    return originalFunc.apply(this, arguments);
  };
  return result;
}
solution();
