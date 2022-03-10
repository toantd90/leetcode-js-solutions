const isPalindrome = word => {
    let l = 0, r = word.length - 1
    
    while (l <= r) {
        if (word[l] !== word[r])
            return false
        l++
        r--
    }
    
    return true
}

/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = words => {
    for (let word of words) {
        if (isPalindrome(word))
            return word
    }
    
    return ''
};