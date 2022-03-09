/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = (words1, words2) => {
    let mapWord = {}
    let res = 0
    for (let word of words1) {
        mapWord[word] = (mapWord[word] || 0) + 1
    }
    
    for (let word of words2) {
        if (mapWord[word] === 0) {
            mapWord[word]--
            res--
        }

        if (mapWord[word] === 1) {
            mapWord[word]--
            res++
        }
    }
    
    return res
};