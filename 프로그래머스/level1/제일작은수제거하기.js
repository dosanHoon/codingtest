function solution(arr) {
  const min = Math.min(...arr);

  const i = arr.findIndex((num) => num === min);

  arr.splice(i, 1);

  if (arr.length > 0) {
    return arr;
  }
  return [-1];
}
