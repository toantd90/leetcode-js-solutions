const A_CHAR_CODE = 97;

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function findPermutationDifference(s, t) {
    let characterIndexes = new Array(26).fill(-1);
    let difference = 0;

    for (let i = 0; i < s.length; i++) {
        const currentS = s.charCodeAt(i) - A_CHAR_CODE;
        const currentT = t.charCodeAt(i) - A_CHAR_CODE;

        if (characterIndexes[currentS] === -1) {
            characterIndexes[currentS] = i;
        } else {
            difference += Math.abs(characterIndexes[currentS] - i);
        }

        if (characterIndexes[currentT] === -1) {
            characterIndexes[currentT] = i;
        } else {
            difference += Math.abs(characterIndexes[currentT] - i);
        }
    }

    return difference;
};