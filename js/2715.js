var cancellable = function(fn, args, t) {
  let cancelled = false;
  setTimeout(() => {
    if (!cancelled) {
      fn(...args);
    }
  }, t);
  return () => {
    cancelled = true;
  }

};


const result = [];
const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMS = 50;
const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ "time": diff, "returned": fn(...argsArr) })
}
const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMS);

setTimeout(cancel, cancelTimeMS);

setTimeout(() => {
  console.log(result); //[{"time":20,"returned":10}]
}, maxT + 15)

