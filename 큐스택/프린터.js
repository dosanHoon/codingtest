export default function 프린터(priorities, location) {
  const que = priorities.map((p, i) => ({ order: p, index: i }));
  const r = [];
  while (que.length) {
    const f = que.shift();
    const has = que.find(({ order }) => f.order < order);
    if (has) {
      que.push(f);
    } else {
      r.push(f);
    }
  }
  return r.findIndex((c) => location === c.index) + 1;
}
