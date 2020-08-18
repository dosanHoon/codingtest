export default function 큰수구하기(number, k) {
  const length = number.length;
  const rcase = [];

  function getNnumber(m, i) {
    const ci = ++i;
    const lc = Number(m[m.length - 1]) + 1;
    for (let j = lc; j < length; j++) {
      if (ci >= k) {
        rcase.push(`${m}${j}`);
      } else {
        getNnumber(`${m}${j}`, ci);
      }
    }
  }
  getNnumber("0", 1);

  return String(
    Math.max(
      ...rcase.map((str) => {
        const arr = number.split("").slice();
        return str
          .split("")
          .reduce((a, c) => {
            a[c] = "";
            return a;
          }, arr)
          .join("");
      })
    )
  );
}
