function solution(A) {
  let result = 0;
  const discs = A.map((n, i) => [i - n, i + n]);
  discs.forEach(([min, max]) => {
    result +=
      discs.filter(([cmin, cmax]) => cmin <= max && cmax >= min).length - 1;
  });
  return result / 2;
}

function solution(A) {
  let result = 0;
  const discs = A.map((n, i) => [i - n, i + n]);
  const copys = discs.slice();
  discs.forEach(([min, max]) => {
    copys.shift();
    result += copys.filter(([cmin, cmax]) => cmin <= max && cmax >= min).length;
  });
  return result;
}

// https://app.codility.com/demo/results/trainingRX6C83-ABC/

function solution(A) {
  let result = 0;
  const discs = A.map((n, i) => [i - n, i + n]);
  discs.sort((a, b) => a[0] - b[0]);
  //   console.log("discs",discs)
  const copys = [...discs];
  discs.forEach(([min, max]) => {
    copys.shift();
    result += copys.filter(([cmin, cmax]) => cmin <= max).length;
  });
  if (result >= 10000000) {
    return -1;
  }
  return result;
}

function solution(A) {
  let result = 0;
  const discs = A.map((n, i) => [i - n, i + n]);

  discs.sort((a, b) => a[0] - b[0]);

  discs.forEach(([min, max], j) => {
    for (let i = j + 1; i < A.length; i++) {
      if (discs[i][0] <= max) {
        ++result;
      } else {
        break;
      }
      if (result > 10000000) return -1;
    }
  });

  return result;
}

function solution(A) {
  let result = 0;
  const discs = A.map((n, i) => [i - n, i + n]);

  discs.sort((a, b) => a[0] - b[0]);

  for (let j = 0; j < A.length; j++) {
    for (let i = j + 1; i < A.length; i++) {
      if (discs[i][0] <= discs[j][1]) {
        ++result;
      } else {
        break;
      }
      if (result > 10000000) return -1;
    }
  }

  return result;
}
