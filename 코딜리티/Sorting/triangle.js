function solution(A) {
  let result = 0;
  for (let p = 0; p < A.length - 2; p++) {
    for (let q = p + 1; q < A.length - 1; q++) {
      for (let r = q + 1; r < A.length; r++) {
        const P = A[p];
        const Q = A[q];
        const R = A[r];

        if (P + Q > R && Q + R > P && R + P > Q) {
          ++result;
        }
      }
    }
  }
  return result;
}

function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      return 1;
    }
  }
  return 0;
}
