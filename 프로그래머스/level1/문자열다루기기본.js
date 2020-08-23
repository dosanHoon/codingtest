function solution(s) {
  const len = s.length;
  if (len === 4 || len === 6) {
    return !isNaN(n);
  }
  return false;
}


function solution(s) {
    const len = s.length
    if(len === 4 || len === 6){
        return s.split("").every((c)=>!isNaN(c))
    }
    return false
}