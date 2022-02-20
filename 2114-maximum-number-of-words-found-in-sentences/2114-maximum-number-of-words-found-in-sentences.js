/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = sentences => {
    let maxWord = 0
    
    for (let sentence of sentences) {
        maxWord = Math.max(maxWord, sentence.split(' ').length)
    }
    
    return maxWord
};