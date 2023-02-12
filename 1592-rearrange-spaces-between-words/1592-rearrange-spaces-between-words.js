/**
 * @param {string} text
 * @return {string}
 */
function reorderSpaces(text) {
  let spaces = 0;
  let words = [];

  for (let i = 0; i < text.length; i++) {
    let j = i;

    while (text[j] === ' ') {
      spaces++;
      j++;
    }

    let word = '';
    while (j < text.length && text[j] !== ' ') {
      word += text[j];
      j++;
    }

    if (word.length > 0) words.push(word);

    i = j - 1;
  }

  if (words.length === 1) {
    return words[0] + ' '.repeat(spaces);
  }

  return (
    words.join(' '.repeat(Math.floor(spaces / (words.length - 1)))) +
    ' '.repeat(spaces % (words.length - 1))
  );
}
