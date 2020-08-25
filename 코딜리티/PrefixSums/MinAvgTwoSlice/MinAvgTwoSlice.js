function solution(A) {
  if (A.length === 2) {
    return 0;
  }
  let minIndex = 0;
  let minAvg = A[0] + A[1] / 2;

  for (let i = 0; i < A.length - 1; i++) {
    let sum = A[i];
    for (let j = i + 1; j < A.length; j++) {
      sum += A[j];
      const avg = sum / (j - i + 1);
      if (minAvg > avg) {
        minAvg = avg;
        minIndex = i;
      }
    }
  }

  return minIndex;
}

export default solution;
