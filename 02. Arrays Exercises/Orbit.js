function orbit(params) {
  let n = params[0] - 1;
  let m = params[1] - 1;
  let x = params[2];
  let y = params[3];
  var result = [];

  // initialize the matrix
  for (var i = 0; i < n + 1; i++) {
    var rs = [];
    for (var j = 0; j < m + 1; j++) {
      if (x === i && y === j) {
        rs.push(1);
      } else {
        rs.push(0);
      }
    }
    result.push(rs);
  }

  // fill the matrix
  let counter = 0;
  let countZeros = 0;

  while (true) {
    counter++;
    for (let i = 0; i <= n; i++) {
      for (var j = 0; j <= m; j++) {
        if (result[i][j] === 0) {
          if (j - 1 >= 0 && result[i][j - 1] === counter) {
            result[i][j] = counter + 1;
          }
          if (i - 1 >= 0 && result[i - 1][j] === counter) {
            result[i][j] = counter + 1;
          }
          if (j + 1 <= m && result[i][j + 1] === counter) {
            result[i][j] = counter + 1;
          }
          if (i + 1 <= n && result[i + 1][j] === counter) {
            result[i][j] = counter + 1;
          }
          if (i - 1 >= 0 && j - 1 >= 0 && result[i - 1][j - 1] === counter) {
            result[i][j] = counter + 1;
          }
          if (i - 1 >= 0 && j + 1 <= m && result[i - 1][j + 1] === counter) {
            result[i][j] = counter + 1;
          }
          if (i + 1 <= n && j - 1 >= 0 && result[i + 1][j - 1] === counter) {
            result[i][j] = counter + 1;
          }
          if (i + 1 <= n && j + 1 <= m && result[i + 1][j + 1] === counter) {
            result[i][j] = counter + 1;
          }
        }
      }
    }
    // check if any zeros are left in the matrix
    countZeros = 0;
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= m; j++) {
        if (result[i][j] === 0) {
          countZeros++;
        }
      }
    }
    if (countZeros === 0) {
      break;
    }
  }
  result.forEach((row) => console.log(row.join(" ")));
}
orbit([4, 4, 0, 0]);
