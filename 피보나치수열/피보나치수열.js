// https://programmers.co.kr/learn/courses/30/lessons/12900?language=javascript
// 재귀함수보다 for문으로 구한게 빠름
export default function solution(n) {
  const start = new Date();
  //   console.log("solution 1", start);
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
  }
  console.log("solution 1 end", new Date() - start);
  return arr[n];
}
// 피보나치 재귀함수로 구했다가는 끔찍한 경험을 
function solution2(n) {
  return n < 3 ? n : (solution2(n - 1) + solution2(n - 2)) % 1000000007;
}

export { solution2 };
