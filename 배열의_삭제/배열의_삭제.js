// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

// var nums = [100, 200, 300, 400, 500];

export default function 배열삭제(nums) {
  const 새배열 = [...nums];
  const 인덱스400 = 새배열.indexOf(400);
  새배열.splice(인덱스400, 1);
  const 인덱스500 = 새배열.indexOf(500);
  새배열.splice(인덱스500, 1);
  return 새배열;
}


//답
// var nums = [100, 200, 300, 400, 500];
// nums.pop();
// nums.pop();

//흠..... Array 의 기본 메소드 사용을 의도한듯, 문제가 애매했다.