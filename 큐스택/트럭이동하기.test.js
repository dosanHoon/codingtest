import 트럭이동하기 from "./트럭이동하기";

test("트럭이동하기", () => {
  expect(트럭이동하기(2, 10, [7, 4, 5, 6])).toBe(8);
  expect(트럭이동하기(100, 100, [10])).toBe(101);
  expect(트럭이동하기(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(
    110
  );
});
