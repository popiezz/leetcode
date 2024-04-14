Array.prototype.last = function() {
  return this.length === 0 ? undefined : this[this.length - 1];
};


const arr = [1, 2, 3];
console.log(arr.last());
