import 채점하기 from "./채점하기";

test("채점하기", () => {
  expect(채점하기([1, 2, 3, 4, 5])).toEqual([1]);
  expect(채점하기([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
});
