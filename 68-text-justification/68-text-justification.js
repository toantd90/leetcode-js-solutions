/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
  let justifiedText = []
  
  for (let i = 0; i < words.length; i++) {
    let currentLine = words[i]
    let currentLineWords = [words[i]]
    let j = i
    while (j <= words.length - 2 && currentLine.length + words[j + 1].length + 1 <= maxWidth) {
      j++
      currentLine += ' ' + words[j]
      currentLineWords.push(words[j])
    }
    
    if (j == words.length - 1) {
      const rightSpaces = ' '.repeat(maxWidth - currentLine.length)
      currentLine += rightSpaces
      justifiedText.push(currentLine)
      
      i = j
      continue
    }
    
    if (currentLineWords.length > 1) {
      let remainingSpaces = maxWidth - currentLine.length + currentLineWords.length - 1
      const normalSpaces = Math.floor(remainingSpaces / (currentLineWords.length - 1))

      let justifiedLine = currentLineWords[currentLineWords.length - 1]

      for (let k = currentLineWords.length - 2; k >= 1; k--) {
        if (remainingSpaces % (k + 1) == 0) {
          const equalSpaces = remainingSpaces / (k + 1)
          justifiedLine = currentLineWords[k] + ' '.repeat(equalSpaces) + justifiedLine
          remainingSpaces -= equalSpaces
        } else {
          justifiedLine = currentLineWords[k] + ' '.repeat(normalSpaces) + justifiedLine  
          remainingSpaces -= normalSpaces
        }
        
      }

      justifiedLine = currentLineWords[0] + ' '.repeat(remainingSpaces) + justifiedLine

      justifiedText.push(justifiedLine)
    } else {
      justifiedText.push(currentLineWords[0] + ' '.repeat(maxWidth - currentLineWords[0].length))
    }
    
    i = j
  }
  
  return justifiedText
};