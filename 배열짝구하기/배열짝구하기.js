export default function 배열짝구하기(n, colors) {
  const counts = colors.reduce((a, c) => {
    a[c] = a[c] ? ++a[c] : 1;
    return a;
  }, {});
  let answer = 0;
  for (const key in counts) {
    answer += Math.floor(counts[key] / 2);
  }
  return answer;
}
