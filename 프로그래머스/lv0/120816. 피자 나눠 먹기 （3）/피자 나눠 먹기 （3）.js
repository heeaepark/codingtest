function solution(slice, n) {
    var pizza = 0;
    while(pizza / n < 1) {
        pizza+=slice
    }
    return pizza / slice
}