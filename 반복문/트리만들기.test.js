import 트리만들기 from "./트리만들기";
import 트리만들기2 from "./트리만들기2";

test("트리만들기", () => {
  expect(트리만들기(5)).toBe(
`    *
   ***
  *****
 *******
*********`);
});

// test("트리만들기2", () => {
//   expect(트리만들기2(1000)).toBe(1000);
// });

// test("트리만들기", () => {
//   expect(트리만들기(1000)).toBe(1000);
// });
