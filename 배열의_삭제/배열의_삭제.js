// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

// var nums = [100, 200, 300, 400, 500];

export default function 배열삭제(nums) {
  const 새배열 = [...nums];
  const 인덱스400 = 새배열.indexOf(400);
  새배열.splice(인덱스400, 1);
  const 인덱스500 = 새배열.indexOf(500);
  새배열.splice(인덱스500, 1);
  console.log("새배열", 새배열);
  return 새배열;
}
