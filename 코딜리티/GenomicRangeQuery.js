// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/start/
const nucleotides = {
  A: 1,
  C: 2,
  G: 3,
  T: 4,
};

function solution1(S, P, Q) {
  const result = [];
  P.forEach((_, i) => {
    result.push(
      Math.min(
        ...S.slice(P[i], Q[i] + 1)
          .split("")
          .map((n) => nucleotides[n])
      )
    );
  });
  return result;
}

function solution2(S, P, Q) {
  const result = [];
  P.forEach((_, i) => {
    result.push(
      S.slice(P[i], Q[i] + 1)
        .split("")
        .reduce((a, c) => (a > nucleotides[c] ? nucleotides[c] : a), 4)
    );
  });
  return result;
}

function solution3(S, P, Q) {
  const StoNumber = S.split("").map((n) => nucleotides[n]);
  const result = [];
  P.forEach((_, i) => {
    result.push(Math.min(...StoNumber.slice(P[i], Q[i] + 1)));
  });
  return result;
}

function solution4(S, P, Q) {
  const result = [];
  P.forEach((_, i) => {
    const q = S.split("").slice(P[i], Q[i] + 1);
    let min = 0;
    if (q.indexOf("A") != -1) {
      min = 1;
    } else if (q.indexOf("C") != -1) {
      min = 2;
    } else if (q.indexOf("G") != -1) {
      min = 3;
    } else {
      min = 4;
    }
    result.push(min);
  });
  return result;
}

function solution(S, P, Q) {
  const len = S.length + 1;
  const NA = new Array(len).fill(0);
  const NC = new Array(len).fill(0);
  const NG = new Array(len).fill(0);
  const NT = new Array(len).fill(0);

  S.split("").forEach((s, i) => {
    switch (s) {
      case "A":
        NA[i + 1]++;
        break;
      case "C":
        NC[i + 1]++;
        break;
      case "G":
        NG[i + 1]++;
        break;
      case "T":
        NT[i + 1]++;
        break;
      default:
        break;
    }

    NA[i + 1] += NA[i];
    NC[i + 1] += NC[i];
    NG[i + 1] += NG[i];
    NT[i + 1] += NT[i];
  });

  const result = [];
  P.forEach((_, i) => {
    const start = P[i];
    const end = Q[i] + 1;
    if (NA[start] != NA[end]) {
      result.push(1);
    } else if (NC[start] != NC[end]) {
      result.push(2);
    } else if (NG[start] != NG[end]) {
      result.push(3);
    } else {
      result.push(4);
    }
  });

  return result;
}

export default function (S, P, Q) {
  return solution(S, P, Q);
}
