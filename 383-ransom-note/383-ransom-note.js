/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    if (ransomNote.length > magazine.length) return false
    
    let cnt = new Array(26).fill(0)
    
    for (let c of magazine) {
        cnt[c.charCodeAt(0) - 97]++
    }
    
    for (let c of ransomNote) {
        cnt[c.charCodeAt(0) - 97]--
    }
    
    for (let i = 0; i < 26; i++) {
        if (cnt[i] < 0) return false
    }
    
    return true
};