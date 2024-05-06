/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    if (word.length < 3) return false;

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = ['@', '#', '$'];

    let hasVowel = false;
    let hasNum = false;
    let hasConsonant = false;
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (nums.includes(word[i])) continue;

        const charCode = word.charCodeAt(i);
        if (vowels.includes(word[i])) {
            hasVowel = true;
            count++; ``
        } else if (((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90))) {
            hasConsonant = true;
            count++;
        } else {
            return false;
        }
    }

    if (hasVowel && hasConsonant) return true;


    return false;
};