import 프린터 from "./프린터";

test("프린터", () => {
  expect(프린터([2, 1, 3, 2], 2)).toBe(1);
  expect(프린터([1, 1, 9, 1, 1, 1], 0)).toBe(5);
});
