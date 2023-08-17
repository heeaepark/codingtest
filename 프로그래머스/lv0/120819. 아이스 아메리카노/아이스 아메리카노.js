function solution(money) {
    const cups = Math.floor(money / 5500)
    const change = money % (5500 * cups)

    return money >= 5500 ? [cups, change] : [0, money]
}