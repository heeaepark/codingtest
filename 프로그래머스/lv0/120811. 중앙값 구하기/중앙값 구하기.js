function solution(array) {
    var answer = 0;
    const sorting = array.sort((a, b) => a-b)
    return answer = sorting[Math.floor(sorting.length / 2)]
}