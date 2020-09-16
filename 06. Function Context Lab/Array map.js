map = (array = [], fun) => {
  const result = [];
  array.forEach((element) => {
    result.push(fun(element));
  });
  return result;
};
