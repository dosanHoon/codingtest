const solution = (arr1, arr2) =>
  arr1.map((a, i) => a.map((b, j) => arr1[i][j] + arr2[i][j]));
