// Write a function to find the longest common prefix string amongst an array of strings.

const longestPrefix = (stringArr) => {
  if (!stringArr.length) return '';

  let prefix = stringArr[0];

  for (let i = 1; i < stringArr.length; i++) {
    while (stringArr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }
  return prefix;
}

let string1 = ['flowers', 'flow', 'flight'] // should return 'fl'
let string2 = ['dog', 'car', 'mouse'] // should return ''


console.log(longestPrefix(string1))
