/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
    let chars = s.split('')
    for (let i = 0; i < chars.length - 1; i++) {
        if (chars[i] % 2 === chars[i + 1] % 2 && chars[i] > chars[i + 1]) {
            [chars[i], chars[i + 1]] = [chars[i + 1], chars[i]];
            break;
        }
    }

    return chars.join('');
};