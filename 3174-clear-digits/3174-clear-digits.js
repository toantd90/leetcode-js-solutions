/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let chars = s.split('');
    let letterIndexes = [];

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (charCode >= 97) {
            letterIndexes.push(i);
        } else {
            const removedLetterIndex = letterIndexes.pop();

            chars[i] = '';
            if (removedLetterIndex !== undefined) {
                chars[removedLetterIndex] = '';
            }
        }
    }

    return chars.join('');
};