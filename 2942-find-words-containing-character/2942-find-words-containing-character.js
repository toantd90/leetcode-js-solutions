/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let indices = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.includes(x)) {
            indices.push(i);
        }
    }

    return indices;
};