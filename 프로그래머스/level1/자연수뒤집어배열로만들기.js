function solution(n) {
    return n.toString().split("").reverse().map((n)=>+n);
}

function solution(n) {
    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}