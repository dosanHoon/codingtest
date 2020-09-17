import solution from "./Brackets";

test("Braket", () => {
  expect(solution("()()()()(){}{}{[]{}{}[]{}{}")).toBe(0);
});
