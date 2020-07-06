import 반장선거 from "./반장선거";

test("반장선거", () => {
  expect(반장선거("원범 원범 혜원 혜원 혜원 혜원 유진 유진")).toStrictEqual([
    "혜원",
    4,
  ]);
});
