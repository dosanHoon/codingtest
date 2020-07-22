import 같은숫자는싫어, { 다른사람풀이2 } from "./같은숫자는싫어";

test("같은숫자는싫어", () => {
  expect(같은숫자는싫어([1, 1, 3, 3, 0, 1, 1])).toStrictEqual([1, 3, 0, 1]);
  expect(같은숫자는싫어([4, 4, 4, 3, 3])).toStrictEqual([4, 3]);
  expect(다른사람풀이2([1, 1, 3, 3, 0, 1, 1])).toStrictEqual([1, 3, 0, 1]);
  expect(다른사람풀이2([4, 4, 4, 3, 3])).toStrictEqual([4, 3]);
});
