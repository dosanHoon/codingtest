import solution, { solution2 } from "./solution";

test("등차수열합", () => {
  expect(solution(5, 3)).toBe(12);
  expect(solution(3, 3)).toBe(3);
  expect(solution(5, 3)).toBe(12);

  expect(solution2(5, 3)).toBe(12);
  expect(solution2(3, 3)).toBe(3);
  expect(solution2(5, 3)).toBe(12);
});
