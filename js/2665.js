

var createCounter = function(init) {
  let count = init;
  return {
    increment: function() {
      count += 1;
      return count;
    },
    reset: function() {
      count = init;
      return count;
    },
    decrement: function() {
      count -= 1;
      return count;
    }
  }
}

console.log(createCounter(5).increment())
