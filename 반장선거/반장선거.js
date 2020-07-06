export default function 반장선거(후보들) {
  const 결과합산 = 후보들.split(" ").reduce((합산, 후보) => {
    if (합산[후보]) {
      ++합산[후보];
    } else {
      합산[후보] = 1;
    }
    return 합산;
  }, {});

  const 최종당선후보 = Object.keys(결과합산).reduce((당선후보, 현재후보) => {
    return 결과합산[현재후보] > 결과합산[당선후보] ? 현재후보 : 당선후보;
  });
  return [최종당선후보, 결과합산[최종당선후보]];
}
