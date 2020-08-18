// # Counting Elements
// FrogRiverOne
// https://app.codility.com/programmers/lessons/4-counting_elements/

export default function solution(X, A) {
  const leaf = new Array(X);
  let position = X;

  for (const [i, el] of A.entries()) {
    if (!leaf[el - 1]) {
      leaf[el - 1] = true;
      --position;
    }
    console.log("position", position);
    if (position === 0) {
      return i;
    }
  }
  return -1;
}
