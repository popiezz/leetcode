var isEmpty = function(obj) {
  return obj == null || (typeof obj === 'object' && Object.keys(obj).length === 0);
}


console.log(isEmpty([]));
