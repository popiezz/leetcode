var chunk = function(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.slice(0, size));
    arr.splice(0, size);
  }
  return newArr;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
