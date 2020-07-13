import 배열차집합구하기, {
  다른풀이,
  또다른풀이,
  마지막시도,
} from "./배열차집합구하기";

test("배열차집합구하기", () => {
  //   expect(배열차집합구하기(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe(
  //     "leo"
  //   );
  //   expect(
  //     배열차집합구하기(
  //       ["marina", "josipa", "nikola", "vinko", "filipa"],
  //       ["josipa", "filipa", "marina", "nikola"]
  //     )
  //   ).toBe("vinko");
  expect(
    배열차집합구하기(
      [
        "marina",
        "josipa",
        "nikola",
        "vinko",
        "filipa",
        ...new Array(1000000).fill("ona"),
      ],
      [
        "josipa",
        "filipa",
        "marina",
        "nikola",
        ...new Array(1000000).fill("ona"),
      ]
    )
  ).toBe("vinko");
});

test("다른풀이", () => {
  expect(
    다른풀이(
      [
        "marina",
        "josipa",
        "nikola",
        "vinko",
        "filipa",
        ...new Array(1000000).fill("ona"),
      ],
      [
        "josipa",
        "filipa",
        "marina",
        "nikola",
        ...new Array(1000000).fill("ona"),
      ]
    )
  ).toBe("vinko");
});

test("또다른풀이", () => {
  expect(
    또다른풀이(
      [
        "marina",
        "josipa",
        "nikola",
        "vinko",
        "filipa",
        ...new Array(1000000).fill("ona"),
      ],
      [
        "josipa",
        "filipa",
        "marina",
        "nikola",
        ...new Array(1000000).fill("ona"),
      ]
    )
  ).toBe("vinko");
});

test("마지막시도", () => {
  expect(
    마지막시도(
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"]
    )
  ).toBe("vinko");
});
