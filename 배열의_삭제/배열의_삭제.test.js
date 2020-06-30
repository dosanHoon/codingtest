import 배열삭제 from "./배열의_삭제";

test("배열삭제", () => {
  var nums = [100, 200, 300, 400, 500];
  expect(배열삭제(nums)).toStrictEqual([100, 200, 300]);
});
