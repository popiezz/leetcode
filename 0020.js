/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

function isValid(s) {
  let stack = [];
  let bracketMap = { ')': '(', '}': '{', ']': '[' };

  for (let char of s) {
      if (char in bracketMap) { // If it's a closing bracket
          let topElement = stack.length > 0 ? stack.pop() : '#'; // Pop or use a dummy character
          if (bracketMap[char] !== topElement) {
              return false; // Mismatch found
          }
      } else {
          stack.push(char); // Push opening bracket
      }
  }

  return stack.length === 0; // Stack should be empty if valid
}


console.log(isValid('()'))
