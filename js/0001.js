const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if ((numbers[i] + numbers[j]) === target) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(twoSum([1, 2, 3, 4, 5], 6));
