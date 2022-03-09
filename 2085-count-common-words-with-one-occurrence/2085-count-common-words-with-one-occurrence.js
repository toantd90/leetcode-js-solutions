/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = (words1, words2) => {
    let mapWord1 = {}, mapWord2 = {}
    for (let word of words1) {
        mapWord1[word] = (mapWord1[word] || 0) + 1
    }
    
    for (let word of words2) {
        mapWord2[word] = (mapWord2[word] || 0) + 1
    }
    
    let res = 0
    for (let word in mapWord1) {
        if (mapWord1[word] === mapWord2[word] && mapWord1[word] === 1) {
            res++
        }
    }
    
    return res
};