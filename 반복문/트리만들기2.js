export default function 트리만들기(n) {
  console.time("calculatingTime");

  let tree = "";

  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= n - i; j++) {
      star += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      star += "*";
    }
    tree += star + "\n";
  }

  console.timeEnd("calculatingTime");
  // return result;
  return n;
}
