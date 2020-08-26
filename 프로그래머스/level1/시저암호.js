function solution(s, n) {
  return s
    .split("")
    .map((c) => {
      if (c === " ") return " ";
      const isUpletter = c.toUpperCase() === c;
      let code = c.charCodeAt() + n;
      if ((isUpletter && code > 90) || (!isUpletter && code > 122)) {
        code -= 26;
      }
      return String.fromCharCode(code);
    })
    .join("");
}

function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") result += " ";
    const isUpletter = s[i].toUpperCase() === s[i];
    let code = s.charCodeAt(i) + n;
    if ((isUpletter && code > 90) || (!isUpletter && code > 122)) {
      code -= 26;
    }
    result += String.fromCharCode(code);
  }
  return result;
}
