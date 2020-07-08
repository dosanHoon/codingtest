export default function getlimitcount(limit, member, 무게들) {
  let sum = 0;
  let index = 0;
  const 무게들arr = 무게들.split(" ");
  while (true) {
    sum += Number(무게들arr[index]);
    if (sum <= limit) {
      ++index;
    } else {
      break;
    }
  }
  return index;
}
