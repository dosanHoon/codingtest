// https://programmers.co.kr/learn/courses/30/lessons/42588

export default function solution(heights) {
  var answer = new Array(heights.length).fill(0);
  for (let i = 0; i < heights.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (heights[i] < heights[j]) {
        answer[i] = j + 1;
        break;
      }
    }
  }
  return answer;
}

//다른 사람의 풀이...
// function solution(heights) {
//   return heights.map((v, i) => {
//     while (i) {
//       i--;
//       if (heights[i] > v) {
//         return i + 1;
//       }
//     }
//     return 0;
//   });
// }
