function makeRepeat(length, char) {
  return new Array(length).fill(char).join("");
}
export default function 트리만들기(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += `${makeRepeat(n - i, " ")}${makeRepeat(2 * i - 1, "*")}${
      i !== n ? "\n" : ""
    }`;
  }
  return result;
}
