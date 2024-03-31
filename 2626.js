var fn = function(accum, curr) {
  return accum + curr;
}
var reduce = function(nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i], i);
  }
  return result;
};
console.log(reduce([1, 2, 3, 4], fn, 20));

