// function solution(A) {
//   let minIndex = 0;
//   let minAvg = A[0] + A[1] / 2;

//   for (let i = 0; i < A.length - 1; i++) {
//     let sum = A[i];
//     for (let j = i + 1; j < A.length; j++) {
//       sum += A[j];
//       const avg = sum / (j - i + 1);
//       if (minAvg > avg) {
//         minAvg = avg;
//         minIndex = i;
//       }
//     }
//   }

//   return minIndex;
// }

function solution(A) {
  let min = (A[0] + A[1]) / 2;
  let minIdx = 0;
  for (let i = 1; i < A.length - 1; i++) {
    let two = (A[i] + A[i + 1]) / 2;
    if (i > A.length - 2) {
      if (two < min) {
        min = two;
        minIdx = i;
      }
    } else {
      let three = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (two < min || three < min) {
        min = two < three ? two : three;
        minIdx = i;
      }
    }
  }
  return minIdx;
}

export default solution;
