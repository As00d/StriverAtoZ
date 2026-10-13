// 118. Pascal's Triangle
var generate = function (numRows) {
  let pascalTriangle = [];
  let rowOne = [1];
  let rowTwo = [1, 1];
  if (numRows == 1) {
    pascalTriangle.push(rowOne);
    return pascalTriangle;
  } else if (numRows == 2) {
    pascalTriangle.push(rowOne);
    pascalTriangle.push(rowTwo);
    return pascalTriangle;
  } else {
    pascalTriangle.push(rowOne);
    pascalTriangle.push(rowTwo);

    for (let i = 0; i < numRows - 2; i++) {
      let tempArray = [],
        sum = 0;
      tempArray.push(1);
      for (let j = 1; j <= pascalTriangle.length - 1; j++) {
        sum +=
          pascalTriangle[pascalTriangle.length - 1][j - 1] +
          pascalTriangle[pascalTriangle.length - 1][j];
        tempArray.push(sum);
        sum = 0;
      }

      tempArray.push(1);

      pascalTriangle.push(tempArray);
    }
    return pascalTriangle;
  }
};
