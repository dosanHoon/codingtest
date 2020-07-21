import 스킬트리 from "./스킬트리";

test("스킬트리", () => {
  expect(스킬트리("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
});
