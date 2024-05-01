/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false
    }

    let count = {};
    for (let i = 0; i < magazine.length; i++) {
        if (ransomNote[i]) {
            count[ransomNote[i]] = (count[ransomNote[i]] || 0) + 1;
        }
        count[magazine[i]] = (count[magazine[i]] || 0) - 1;
    }

    return Object.values(count).every(c => c < 1);
};