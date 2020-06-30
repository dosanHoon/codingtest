export default function 트리만들기(n) {
  console.time("calculatingTime")
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += new Array(n - i).fill(" ").join("");
    result += new Array(2 * i - 1).fill("*").join("");
    if (i !== n) result += "\n";
  }
  console.timeEnd('calculatingTime');
  // return result;
  return n;
}
