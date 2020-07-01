import 거꾸로 from "./거꾸로";

test("거꾸로", () => {
  expect(거꾸로("거꾸로")).toBe("로꾸거");
  expect(거꾸로("안녕")).toBe("녕안");
});
