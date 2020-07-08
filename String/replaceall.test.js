import replaceall from "./replaceall";

test("replaceall", () => {
  expect(replaceall("querty")).toBe("euerty");
  expect(replaceall("hqllo my namq is hyqwon")).toBe("hello my name is hyewon");
});
