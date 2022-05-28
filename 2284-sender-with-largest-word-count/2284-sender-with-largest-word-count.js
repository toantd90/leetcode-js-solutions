/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
const largestWordCount = (messages, senders) => {
    let largestWordCountSender = []
    let maxWordCount = 0
    let wordCount = {}
    
    const n = messages.length
    
    for (let i = 0; i < n; i++) {
        wordCount[senders[i]] = (wordCount[senders[i]] || 0) + messages[i].split(' ').length
        if (wordCount[senders[i]] > maxWordCount) {
            maxWordCount = wordCount[senders[i]]
            largestWordCountSender = [senders[i]]
            continue
        }
        
        if (wordCount[senders[i]] === maxWordCount) {
            largestWordCountSender.push(senders[i])
        }
    }
    
    largestWordCountSender.sort((s1, s2) => s1 > s2 ? -1 : 1)
    
    return largestWordCountSender[0]
};