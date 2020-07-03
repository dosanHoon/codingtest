import sort구현 from "./sort구현";

test("sort구현", () => {
  expect(sort구현("176 156 155 165 166 169")).toBe(false);
  expect(sort구현("155 156 165 166 169 176")).toBe(true);
});
