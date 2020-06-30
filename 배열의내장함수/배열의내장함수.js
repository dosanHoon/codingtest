// 데이터
// var arr = [200, 100, 300];
// //pass
// console.log(arr);

// 출력
// [200, 100, 10000, 300]

export default function 배열의내장함수(arr) {
  const 새배열 = arr.slice();
  새배열.splice(2, 0, 10000);

  return 새배열;
}

