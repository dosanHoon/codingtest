export default function solution(lines) {
  const runtimes = [];
  const logs = lines.map((line) => {
    const log = line.split(" ");
    const end = new Date(`${log[0]} ${log[1]}`).getTime();
    const start = new Date(end - log[2].replace("s", "") * 1000).getTime() + 1;
    runtimes.push(start);
    runtimes.push(end);
    return [start, end];
  });

  return Math.max(
    ...runtimes.map((time) => {
      const runStart = time;
      const runEnd = time + 1000;
      return logs.filter(([start, end]) => start < runEnd && end >= runStart)
        .length;
    })
  );
}
