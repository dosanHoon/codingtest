function solution(num) {
  const len = num.length - 4;
  return "*".repeat(len) + num.substring(len);
}
