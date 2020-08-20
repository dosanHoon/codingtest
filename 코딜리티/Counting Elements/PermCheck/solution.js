function solution(A) {
    A.sort((a,b)=>a-b)
    return !A.some((a,i)=>a != i + 1) * 1
}