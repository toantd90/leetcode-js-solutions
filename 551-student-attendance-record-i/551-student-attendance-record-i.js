/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = s => {
    let absentCount = 0, currentLateDays = 0
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (char === 'P') {
            currentLateDays = 0
            continue
        } else if (char === 'L') {
            currentLateDays++
            if (currentLateDays === 3) return false
        } else {
            currentLateDays = 0
            absentCount++
            if (absentCount === 2) return false
        }
    }
    
    return true
};