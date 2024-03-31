var fn = function(i) {
  return i === 0;
}
var filter = function(arr, fn) {
  var filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    };
  }
  return filteredArr;
};

console.log(filter([1, 2, 3, 14], fn));
