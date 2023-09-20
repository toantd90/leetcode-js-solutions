/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
function findOcurrences(text, first, second) {
  const words = text.split(" ");
  let thirdWords = [];

  for (let i = 0; i < words.length; i++) {
    if (
      words[i] === first &&
      words[i + 1] === second &&
      i <= words.length - 3
    ) {
      thirdWords.push(words[i + 2]);
    }
  }

  return thirdWords;
}
