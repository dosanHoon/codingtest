function solution(s) {
  let index = 0;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      index = 0;
      result += " ";
    } else {
      result += index % 2 ? s[i].toLowerCase() : s[i].toUpperCase();
      index++;
    }
  }
  return result;
}

function solution2(s) {
  s.split(" ")
    .map((i) =>
      i
        .split("")
        .map((c, i) => (i % 2 ? c.toLowerCase() : c.toUpperCase()))
        .join("")
    )
    .join(" ");
}
