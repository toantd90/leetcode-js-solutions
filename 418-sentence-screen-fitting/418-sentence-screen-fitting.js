/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
const wordsTyping = (sentence, rows, cols) => {
    const sentenceLen = sentence.length
    let nextWord = new Array(sentenceLen)
    let times = new Array(sentenceLen)
    
    for (let i = 0; i < sentenceLen; i++) {
        let cur = i
        let curLen = 0
        let curTime = 0
        
        while (curLen + sentence[cur].length <= cols) {
            curLen += sentence[cur].length + 1
            cur++
            
            if (cur === sentenceLen) {
                curTime++
                cur = 0
            }
        }
        
        nextWord[i] = cur
        times[i] = curTime
    }
    
    let start = 0
    let totalTimes = 0
    
    for (let i = 0; i < rows; i++) {
        totalTimes += times[start]
        start = nextWord[start]
    }
    
    return totalTimes
};