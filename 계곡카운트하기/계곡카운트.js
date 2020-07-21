export default function countingValleys(n, s) {
  let current = 0;
  let vallyCount = 0;
  s.split("").forEach((c) => {
    if (c === "U") {
      ++current;
    } else {
      if (current === 0) {
        ++vallyCount;
      }
      --current;
    }
  });
  return vallyCount;
}
