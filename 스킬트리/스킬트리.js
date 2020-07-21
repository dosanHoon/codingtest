export default function solution(skill, skill_trees) {
  return skill_trees.filter(
    (t) =>
      skill.indexOf(
        t
          .split("")
          .filter((tr) => skill.includes(tr))
          .join("")
      ) === 0
  ).length;
}
