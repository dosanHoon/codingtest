import solution from "./solution";

test("frogoneriver", () => {
  expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6);
  expect(solution(5, [1, 3, 1, 4, 2, 3, 4])).toBe(-1);
  expect(solution(5, [1, 5, 2, 3, 4])).toBe(4);
});

