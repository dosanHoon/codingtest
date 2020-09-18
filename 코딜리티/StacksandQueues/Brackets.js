// // 1
function removeAll(str, c) {
  return str.split(c).join("");
}
function solution(S) {
  if (!S) {
    return 1;
  }

  const counts = {
    "(": 0,
    "{": 0,
    "[": 0,
    "]": 0,
    "}": 0,
    ")": 0,
  };

  S.split("").forEach((e) => {
    ++counts[e];
  });

  if (
    counts["("] !== counts[")"] ||
    counts["{"] !== counts["}"] ||
    counts["["] !== counts["]"]
  ) {
    return 0;
  }

  S = removeAll(S, "()");
  S = removeAll(S, "[]");
  S = removeAll(S, "{}");

  return S === "" ? 1 : 0;
}

// // 2
function removeAll(str, c) {
  return str.split(c).join("");
}

function removeNest(str) {
  if (
    str.indexOf("()") > -1 ||
    str.indexOf("[]") > -1 ||
    str.indexOf("{}") > -1
  ) {
    str = removeAll(str, "()");
    str = removeAll(str, "[]");
    str = removeAll(str, "{}");
    return removeNest(str);
  } else {
    return str;
  }
}

function solution(S) {
  return removeNest(S) == "" ? 1 : 0;
}

// // 3

function removeAll(str, c) {
  return str.split(c).join("");
}

function valid(str, start, end) {
  if (str.indexOf(end) < str.indexOf(start)) {
    throw 0;
  }
  if (str.lastIndexOf(end) < str.lastIndexOf(start)) {
    throw 0;
  }
}

function removeNest(str) {
  valid(str, "(", ")");
  valid(str, "[", "]");
  valid(str, "{", "}");
  if (
    str.indexOf("()") > -1 ||
    str.indexOf("[]") > -1 ||
    str.indexOf("{}") > -1
  ) {
    str = removeAll(str, "()");
    str = removeAll(str, "[]");
    str = removeAll(str, "{}");
    return removeNest(str);
  } else {
    return str;
  }
}

function solution(S) {
  try {
    return removeNest(S) == "" ? 1 : 0;
  } catch (e) {
    return e;
  }
}

//2번과 3번이 동일한 퍼포먼스

//https://miiingo.tistory.com/328
function lastValid(last, c) {
  if (last != c) {
    throw 0;
  }
}

export default function solution(S) {
  try {
    const stack = [];

    for (let i = 0; i < S.length; i++) {
      switch (S[i]) {
        case "(":
        case "{":
        case "[":
          stack.push(S[i]);
          break;
        case ")":
          lastValid(stack.pop(), "(");
          break;
        case "}":
          lastValid(stack.pop(), "{");
          break;
        case "]":
          lastValid(stack.pop(), "[");
          break;
      }
    }

    return stack.length > 0 ? 0 : 1;
  } catch (e) {
    return e;
  }
}
