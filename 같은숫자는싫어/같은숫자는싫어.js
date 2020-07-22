function 다른사람풀이2(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

export default function solution(arr) {
  return arr.reduce((a, c) => {
    if (a[a.length - 1] !== c) {
      a.push(c);
    }
    return a;
  }, []);
}

export { 다른사람풀이2 };
