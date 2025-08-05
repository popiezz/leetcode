// Given a roman numeral, convert it to an integer


const convertRomans = (x) => {

  const standards = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  }
  let sum = 0;
  let numeral = x.split('');

  for (let i = 0; i < numeral.length; i++) {
    let current = standards[numeral[i]];
    let next = standards[numeral[i + 1]];

    if (i + 1 < numeral.length && current < next) {
      sum += next - current;
      i++;
    } else {
      sum += current;
    }
  }
  return sum;
};

console.log(convertRomans('MCMXCIV'));
