function solution(A) {
  const maxN = Math.max(...A);
  const maxI = A.indexOf(maxN);
  const newA = [...A.slice(0, maxI), ...A.slice(maxI + 1)];

  let maxV = A[0] * A[1] * A[2];
  newA.forEach((n, i) => {
    for (let j = i + 1; j < newA.length; j++) {
      const newMax = maxN * n * newA[j];
      maxV = newMax > maxV ? newMax : maxV;
    }
  });
  return maxV;
}

function solution(A) {
  const normalA = A.sort((a, b) => b - a).slice();
  const absA = A.sort((a, b) => Math.abs(b) - Math.abs(a)).slice();

  const normalAResult = normalA[0] * normalA[1] * normalA[2];
  const absAResult = absA[0] * absA[1] * absA[2];

  return Math.max(normalAResult, absAResult);
}

function solution(A) {
  A.sort((a, b) => b - a);
  let maxV = A[0] * A[1] * A[2];
  let maxV2 = A[0] * A[A.length - 1] * A[A.length - 2];

  return Math.max(maxV, maxV2);
}
