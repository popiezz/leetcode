let count = -1;
var once = function(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn.apply(this, args);
    }
    return undefined;
  };
};


let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1, 2, 3));
