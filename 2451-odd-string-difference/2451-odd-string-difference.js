function getLetterPositionMap() {
  let map = new Map();

  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(97 + i)] = i;
  }

  return map;
}

function isArraysDifferent(arr1, arr2) {
  if (arr1.length !== arr2.length) return true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return true;
  }

  return false;
}

/**
 * @param {string[]} words
 * @return {string}
 */
function oddString(words) {
  let differences = [];
  const n = words[0].length;

  const letterPositionMap = getLetterPositionMap();

  for (let word of words) {
    let currentDifference = [];
    for (let i = 1; i < n; i++) {
      currentDifference.push(
        letterPositionMap[word[i]] - letterPositionMap[word[i - 1]]
      );
    }

    if (differences.length >= 2) {
      if (
        isArraysDifferent(
          currentDifference,
          differences[differences.length - 1]
        ) &&
        isArraysDifferent(
          currentDifference,
          differences[differences.length - 2]
        )
      ) {
        return word;
      }
    }

    differences.push(currentDifference);
  }

  if (isArraysDifferent(differences[0], differences[2])) {
    return words[0];
  }

  return words[1];
}
