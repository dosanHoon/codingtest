import 이그램 from "./이그램";

test("이그램", () => {
  expect(이그램("javascript")).toStrictEqual([
    ["j", "a"],
    ["a", "v"],
    ["v", "a"],
    ["a", "s"],
    ["s", "c"],
    ["c", "r"],
    ["r", "i"],
    ["i", "p"],
    ["p", "t"],
  ]);
});
