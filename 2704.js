

var expect = function(val) {
  return {
    toBe: function(val2) {
      return val === val2 ? { "value": true } : { "value": "Not Equal" };
    },
    notToBe: function(val2) {
      return val !== val2 ? { "value": true } : { "value": "Equal" };
    }
  }
};

console.log(expect(5).toBe(5));
