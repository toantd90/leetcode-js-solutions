/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = (words, pref) => {
    let res = 0
    
    words.forEach(word => {
        let firstIndex = word.indexOf(pref)
        
        if (firstIndex === 0)
            res++
    })
    
    return res
};