import PassingCars from "./ PassingCars";

test("PassingCars", () => {
  expect(PassingCars([0, 1, 0, 1, 1])).toBe(5);
});
