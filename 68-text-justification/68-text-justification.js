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
  return ' '.repeat(numOfSpace)
}

function padRight(str, maxWidth) {
  return str + generateSpaces(maxWidth - str.length)
}

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
  let justifiedText = [];

  for (let i = 0; i < words.length; i++) {
    const [end, lengthWithoutSpaces] = findEnd(i, maxWidth, words);
    
    if (end == i) {
      justifiedText.push(padRight(words[end], maxWidth))
      continue
    }
    
    const numOfSpaces = end - i;
    let totalSpace = maxWidth - lengthWithoutSpaces;
    const isLastLine = end == words.length - 1
    

    let justifiedLine = words[end];

    for (
      let j = numOfSpaces, currentWordIndex = end - 1;
      j >= 1, currentWordIndex >= i;
      j--, currentWordIndex--
    ) {
      const numOfAssignedSpaces = Math.floor(totalSpace / j);
      justifiedLine = words[currentWordIndex] + (isLastLine ? ' ' : generateSpaces(numOfAssignedSpaces)) + justifiedLine;
      totalSpace -= numOfAssignedSpaces;
    }
    
    if (end == words.length - 1) {
      justifiedLine += generateSpaces(maxWidth - justifiedLine.length)
    }

    justifiedText.push(justifiedLine);

    i = end;
  }

  return justifiedText;
}
