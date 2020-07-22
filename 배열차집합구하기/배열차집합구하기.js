//https://programmers.co.kr/learn/courses/30/lessons/42576

export default function solution(participant, completion) {
  const startTime = new Date();

  var answer = "";
  const victory = [...completion];
  participant.some((e) => {
    const i = victory.indexOf(e);
    if (i > -1) {
      victory.splice(i, 1);
      return false;
    } else {
      answer = e;
      return true;
    }
  });
  const endTime = new Date();
  const runTime = endTime - startTime;
  console.log("runTime", runTime);
  return answer;
}

// 통과 (2.75ms, 37.5MB)
// 테스트 2 〉	통과 (2.85ms, 37.5MB)
// 테스트 3 〉	통과 (3.11ms, 37.5MB)
// 테스트 4 〉	통과 (3.65ms, 37.9MB)
// 테스트 5 〉	통과 (3.32ms, 37.7MB)

export function 다른풀이(participant, completion) {
  const startTime = new Date();

  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) {
      const endTime = new Date();
      const runTime = endTime - startTime;
      return participant[i];
    }
  }
}

export function 또다른풀이(_, $) {
  const startTime = new Date();
  const result = _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );
  const endTime = new Date();
  const runTime = endTime - startTime;
  return result;
}

export function 마지막시도(participant, completion) {
  const startTime = new Date();
  const result = participant.find((e) => {
    const i = completion.indexOf(e);
    if (i === -1) return true;
    completion.splice(i, 1);
  });
  const endTime = new Date();
  const runTime = endTime - startTime;
  return result;
}
