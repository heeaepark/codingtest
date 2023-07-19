function solution(n) {
    var answer = [];
    for(i = 1; i <= n; i++) {
        i % 2 ? answer.push(i) : null 
    }
    return answer;
}