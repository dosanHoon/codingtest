export default function solution(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}

function solution2(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

export { solution2 };
