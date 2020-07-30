export default function solution(A) {
  let result = 0;
  let currentQ = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    if (result >= 1000000000) {
      result = -1;
      break;
    }
    if (A[i] === 1) {
      ++currentQ;
    } else {
      result += currentQ;
    }
  }
  return result;
}
