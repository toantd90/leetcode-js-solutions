/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
  const firstRow = "qwertyuiop";
  const secondRow = "asdfghjkl";
  const thirdRow = "zxcvbnm";
  let oneRowWords = [];

  for (let word of words) {
    let wordByRows = [0, 0, 0];
    let isOneRow = true;
    const lowerCaseWord = word.toLowerCase();

    for (let i = 0; i < lowerCaseWord.length; i++) {
      if (firstRow.includes(lowerCaseWord[i])) {
        wordByRows[0]++;
      } else if (secondRow.includes(lowerCaseWord[i])) {
        wordByRows[1]++;
      } else {
        wordByRows[2]++;
      }

      if (wordByRows.every((count) => count !== i + 1)) {
        isOneRow = false;
        break;
      }
    }

    if (isOneRow) {
      oneRowWords.push(word);
    }
  }

  return oneRowWords;
}
