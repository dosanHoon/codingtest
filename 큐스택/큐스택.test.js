import 큐스택 from "./큐스택";

test("큐스택", () => {
  expect(큐스택([6, 9, 5, 7, 4])).toStrictEqual([0, 0, 2, 2, 4]);
  expect(큐스택([3, 9, 9, 3, 5, 7, 2])).toStrictEqual([0, 0, 0, 3, 3, 3, 6]);
  expect(큐스택([1, 5, 3, 6, 7, 6, 5])).toStrictEqual([0, 0, 2, 0, 0, 5, 6]);
});
