function solution(array) {
  if (array.length <= 1) return array[0];

  let obj = {};
  let answer = [];

  array.map((el) => {
    if (!Object.keys(obj).includes(`${el}`)) {
      obj[el] = 1;
    } else {
      obj[el] = ++obj[el];
    }
  });

  answer = Object.entries(obj).sort((a, b) =>  b[1] - a[1]) 

  if (answer.length > 1 && answer[0][1] === answer[1][1]) return -1;
  else return Number(answer[0][0]);
}