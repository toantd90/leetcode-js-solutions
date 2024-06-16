function isPermutation(charMap) {
    return [...charMap.values()].every(count => count === 0);
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
    let charMap = new Map();

    for (let i = 0; i < s1.length; i++) {
        charMap.set(s1[i], (charMap.get(s1[i]) || 0) + 1);
        charMap.set(s2[i], (charMap.get(s2[i]) || 0) - 1);
    }

    if (isPermutation(charMap)) {
        return true;
    }

    for (let i = s1.length; i < s2.length; i++) {
        charMap.set(s2[i], (charMap.get(s2[i]) || 0) - 1);
        charMap.set(s2[i - s1.length], (charMap.get(s2[i - s1.length]) || 0) + 1);

        if (isPermutation(charMap)) {
            return true;
        }
    }

    return false;
};