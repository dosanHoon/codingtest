const tenLep = new Array(9).fill("");
export default function 구구단출력(n) {
  return tenLep.reduce((acc, cur, i) => {
    return `${acc} ${n * (i + 1)}`;
  }, "");
}
