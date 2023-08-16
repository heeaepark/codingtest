function solution(price) {
    let answer = 0
    let discount = 0
    // if(price >= 100000 && price < 300000) {
    //     discount = Math.floor(price * 0.05);
    //     answer = price - discount
    // } else if (price < 500000) {
    //     discount = Math.floor(price * 0.1);
    //     answer = price - discount
    // } else if (price >= 500000) {
    //     discount = Math.floor(price * 0.2);
    //     answer = price - discount
    // } else {
    //     answer = price
    // }

    if (price >= 500000) return Math.floor(price * 0.8)
    if (price >= 300000) return Math.floor(price * 0.9)
    if (price >= 100000) return Math.floor(price * 0.95)
    if (price < 100000) return price

}