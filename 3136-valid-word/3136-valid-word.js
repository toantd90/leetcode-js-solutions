function isInRange(charCode, lowerRange, upperRange) {
    return charCode >= lowerRange && charCode <= upperRange;
}

function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase());
}

/**
 * @param {string} word
 * @return {boolean}
 */
function isValid(word) {
    if (word.length < 3) return false;
    let hasConsonant = false;
    let hasVowel = false;
    for (let i = 0; i < word.length; i++) {
        const charCode = word.charCodeAt(i);
        const isDigit = isInRange(charCode, 48, 57);
        const isEnglishLetter = isInRange(charCode, 65, 90) || isInRange(charCode, 97, 122);
        if (!isDigit && !isEnglishLetter) {
            return false;
        }

        if (!isDigit) {
            if (isVowel(word[i])) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasConsonant && hasVowel;
};