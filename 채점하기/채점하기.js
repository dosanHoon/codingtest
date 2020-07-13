const randoms = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

export default function solution(answers) {
  var answer = [];
  const result = [0, 0, 0];
  let maxCount = 0;

  function checker(name, i, e) {
    const length = randoms[name].length;
    const index = i % length;
    if (randoms[name][index] === e) {
      result[name] = ++result[name];
    }
  }

  answers.forEach((e, i) => {
    checker(0, i, e);
    checker(1, i, e);
    checker(2, i, e);
  });

  maxCount = Math.max(...result);
  
  result.forEach((e, i) => {
    e === maxCount && answer.push(++i);
  });
  return answer;
}
