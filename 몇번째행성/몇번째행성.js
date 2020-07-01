const planet = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

export default function 몇번째행성(index) {
  return planet[index - 1];
}
