/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestDistance = (wordsDict, word1, word2) => {
    let distance = wordsDict.length + 1
    let lastWord1 = -1
    let lastWord2 = -1
    
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) lastWord1 = i
        if (wordsDict[i] === word2) lastWord2 = i
        
        if (lastWord1 !== -1 && lastWord2 !== -1) {
            distance = Math.min(distance, Math.abs(lastWord1 - lastWord2))
        }
    }
    
    return distance
};