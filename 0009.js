// Given an int return true if x is a palindrome and false if it's not.


const isPalin = (x) => {

  let numToString = x.toString().split('');

  let numArr = numToString.map(Number);
  let leftCheck = 1;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] != numArr[numArr.length - leftCheck]) {
      return (x, "is not a palindrome");
    }
    leftCheck++;
  }

  return (x, "is  a palindrome")

}
console.log(isPalin(10));
