export default function 트럭이동하기(bridge_length, weight, truck_weights) {
  let currentSum = 0;
  const currntBridge = new Array(bridge_length).fill(0);
  let sec = 0;
  while (true) {
    if (truck_weights[0] === undefined && currentSum === 0) break;
    ++sec;
    currentSum -= currntBridge.pop();
    if (truck_weights[0] + currentSum <= weight) {
      const t = truck_weights.shift();
      currentSum += t;
      currntBridge.unshift(t);
    } else {
      currntBridge.unshift(0);
    }
  }
  return sec;
}
