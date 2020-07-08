import getlimitcount from "./getlimitcount";

test("getlimitcount", () => {
  expect(getlimitcount(50, 5, "10 20 30 40 50")).toBe(2);
  expect(getlimitcount(50, 5, "10 10 30 40 50")).toBe(3);
  expect(getlimitcount(50, 5, "10 10 10 10 50")).toBe(4);
});
