import GenomicRangeQuery from "./GenomicRangeQuery";

test("GenomicRangeQuery", () => {
  expect(GenomicRangeQuery("CAGCCTA", [2, 5, 0], [4, 5, 6])).toStrictEqual([2, 4, 1]);
  expect(GenomicRangeQuery("C", [ 0], [0])).toStrictEqual([2]);
});
  