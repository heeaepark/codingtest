const solution = (numbers) => {
    const avg = numbers.reduce((acc, cur) => {return acc += cur}) / numbers.length
    return avg.toFixed(1)
}