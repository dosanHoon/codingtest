//https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

function solution(A, B, K) {
  return Math.floor(B / K) - Math.ceil(A / K) + 1;
}
