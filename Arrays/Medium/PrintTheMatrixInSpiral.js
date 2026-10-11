// 54. Spiral Matrix
var spiralOrder = function (matrix) {
  let dir = 0,
    left = 0,
    bottom = matrix.length - 1,
    top = 0,
    right = matrix[0].length - 1,
    output = [];

  while (top <= bottom && left <= right) {
    if (dir == 0) {
      for (let i = left; i <= right; i++) {
        output.push(matrix[top][i]);
      }
      top++;
      if (dir + 1 == 4) {
        dir = 0;
      } else {
        dir++;
      }
    } else if (dir == 1) {
      for (let i = top; i <= bottom; i++) {
        output.push(matrix[i][right]);
      }
      right--;
      if (dir + 1 == 4) {
        dir = 0;
      } else {
        dir++;
      }
    } else if (dir == 2) {
      for (let i = right; i >= left; i--) {
        output.push(matrix[bottom][i]);
      }
      bottom--;
      if (dir + 1 == 4) {
        dir = 0;
      } else {
        dir++;
      }
    } else {
      for (let i = bottom; i >= top; i--) {
        output.push(matrix[i][left]);
      }
      left++;
      if (dir + 1 == 4) {
        dir = 0;
      } else {
        dir++;
      }
    }
  }

  return output;
};

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
