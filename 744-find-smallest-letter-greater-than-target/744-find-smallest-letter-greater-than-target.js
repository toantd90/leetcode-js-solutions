/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
    let l = 0, r = letters.length - 1
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (letters[mid] > target && (!letters[mid - 1] || letters[mid - 1] <= target)) {
            return letters[mid]
        } else if (letters[mid - 1] > target) {
            r = mid -1
        } else {
            l = mid + 1
        }
    }
    
    return letters[0]
};