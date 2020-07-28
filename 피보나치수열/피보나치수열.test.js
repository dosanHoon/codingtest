import solution, { solution2 } from "./피보나치수열";

test("피보나치수열", () => {
  expect(solution(30)).toBe(1346269);
  expect(
    (() => {
      const start = new Date();
      const t = solution2(30);
      console.log("solution 2 end", new Date() - start);
      return t;
    })()
  ).toBe(1346269);
});
