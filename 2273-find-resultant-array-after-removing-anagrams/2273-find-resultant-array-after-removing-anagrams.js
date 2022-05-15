/**
 * @param {string[]} words
 * @return {string[]}
 */
const removeAnagrams = (words) => {
  let stack = [words[0].split('').sort().join('')];
  let result = [words[0]];
  for (let i = 1; i < words.length; i++) {
    const top = stack[stack.length - 1];
    const sortedWord = words[i].split('').sort().join('');
    if (top === sortedWord) continue;
    stack.push(sortedWord);
    result.push(words[i]);
  }

  return result;
};
