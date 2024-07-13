function isPermutation(a1, a2) {
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            return false;
        }
    }

    return true;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);


    for (let i = 0; i < s1.length; i++) {
        const s1CharIndex = s1.charCodeAt(i) - 97;
        s1Count[s1CharIndex]++;
        const s2CharIndex = s2.charCodeAt(i) - 97;
        s2Count[s2CharIndex]++;
    }

    if (isPermutation(s1Count, s2Count))
        return true;


    for (let i = s1.length; i < s2.length; i++) {
        let s2CharIndex = s2.charCodeAt(i - s1.length) - 97;
        s2Count[s2CharIndex]--;
        s2CharIndex = s2.charCodeAt(i) - 97;
        s2Count[s2CharIndex]++;

        if (isPermutation(s1Count, s2Count)) {
            return true;
        }
    }

    return false;
};