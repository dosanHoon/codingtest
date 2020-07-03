import 대문자 from "./대문자";

test("대문자", () => {
  expect(대문자("javascript")).toBe(false);
  expect(대문자("e")).toBe(false);
  expect(대문자("E")).toBe(true);
});
