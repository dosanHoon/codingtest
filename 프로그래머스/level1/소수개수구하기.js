//단순한 방법
//당연히 타임 아웃
function solution(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    let 소수 = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        소수 = false;
      }
    }
    if (소수) ++count;
  }
  return count;
}

//소수들로 나누어서 떨어지면 소수가 아니기 때문에
//그래도 타임 아웃
function solution(n) {
  const 소수들 = [2];
  for (let i = 2; i <= n; i++) {
    const is소수 = 소수들.some((c) => i % c === 0);
    if (!is소수) 소수들.push(i);
  }
  return 소수들.length;
}

//에라토스테네스의 체
//주어진 값까지 루프를 돌면서 소수의 배수를 먼저 제거한다.
function solution(n) {
  const 소수들 = new Array(n).fill(true);
  소수들[0] = false;
  for (let i = 2; i ** 2 <= n; i++) {
    if (소수들[i - 1] === true) {
      for (let j = i ** 2; j <= n; j += i) {
        소수들[j - 1] = false;
      }
    }
  }
  return 소수들.filter((e) => e).length;
}

//Set을 이용한 풀이
//위와 같은 원리
function solution(n) {
  const s = new Set();
  //짝수는 소수 일수가 없음
  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }
  s.add(2);
  for (let j = 3; j ** 2 < n; j++) {
    if (s.has(j)) {
      for (let k = j ** 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
