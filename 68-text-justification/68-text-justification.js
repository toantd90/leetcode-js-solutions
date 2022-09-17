function findEnd(start, maxWidth, words) {
  let length = words[start].length;
  let end = start;

  while (
    end + 1 <= words.length - 1 &&
    length + end - start + 1 + words[end + 1].length <= maxWidth
  ) {
    end++;
    length += words[end].length;
  }

  return [end, length];
}

function generateSpaces(numOfSpace) {
  return ' '.repeat(numOfSpace);
}

function padRight(str, maxWidth) {
  return str + generateSpaces(maxWidth - str.length);
}

function justify(start, end, lengthWithoutSpaces, words, maxWidth) {
  if (end == start) {
    return padRight(words[end], maxWidth);
  }

  const numOfSpaces = end - start;
  let totalSpace = maxWidth - lengthWithoutSpaces;
  const isLastLine = end == words.length - 1;

  let justifiedLine = words[end];

  for (
    let j = numOfSpaces, currentWordIndex = end - 1;
    j >= 1, currentWordIndex >= start;
    j--, currentWordIndex--
  ) {
    const numOfAssignedSpaces = Math.floor(totalSpace / j);
    justifiedLine =
      words[currentWordIndex] +
      (isLastLine ? ' ' : generateSpaces(numOfAssignedSpaces)) +
      justifiedLine;
    totalSpace -= numOfAssignedSpaces;
  }

  if (end == words.length - 1) {
    justifiedLine += generateSpaces(maxWidth - justifiedLine.length);
  }

  return justifiedLine;
}

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
  let justifiedText = [];

  for (let start = 0; start < words.length; start++) {
    const [end, lengthWithoutSpaces] = findEnd(start, maxWidth, words);
    justifiedText.push(
      justify(start, end, lengthWithoutSpaces, words, maxWidth)
    );
    start = end;
  }

  return justifiedText;
}
