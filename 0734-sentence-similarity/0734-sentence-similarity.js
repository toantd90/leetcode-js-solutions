/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
function areSentencesSimilar(sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) {
    return false;
  }

  let similarPairsMap = {};

  for (let i = 0; i < similarPairs.length; i++) {
    if (similarPairsMap[similarPairs[i][0]]) {
      similarPairsMap[similarPairs[i][0]].push(similarPairs[i][1]);
    } else {
      similarPairsMap[similarPairs[i][0]] = [similarPairs[i][1]];
    }

    if (similarPairsMap[similarPairs[i][1]]) {
      similarPairsMap[similarPairs[i][1]].push(similarPairs[i][0]);
    } else {
      similarPairsMap[similarPairs[i][1]] = [similarPairs[i][0]];
    }
  }

  for (let i = 0; i < sentence1.length; i++) {
    if (
      sentence1[i] === sentence2[i] ||
      (similarPairsMap[sentence2[i]] &&
        similarPairsMap[sentence2[i]].includes(sentence1[i])) ||
      (similarPairsMap[sentence1[i]] &&
        similarPairsMap[sentence1[i]].includes(sentence2[i]))
    ) {
      continue;
    }

    return false;
  }

  return true;
}
