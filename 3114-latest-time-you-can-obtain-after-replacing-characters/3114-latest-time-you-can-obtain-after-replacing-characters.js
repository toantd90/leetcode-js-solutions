/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
    let result = ''

    if (s[0] !== '?' && s[1] !== '?') {
        result += s[0] + s[1];
    } else if (s[0] === '?' && s[1] === '?') {
        result += '11';
    } else if (s[0] === '?') {
        if (Number(s[1]) > 1) {
            result += '0' + s[1];
        } else {
            result += '1' + s[1];
        }
        
    } else {
        // s[1] === '?'
        if (s[0] === '0') {
            result += s[0] + '9';
        } else {
            result += s[0] + '1';
        }
    }

    result += ':';

    if (s[3] !== '?' && s[4] !== '?') {
        result += s[3] + s[4];
    } else if (s[3] === '?' && s[4] === '?') {
        result += '59';
    } else if (s[3] === '?') {
        result += '5' + s[4];
    } else {
        // s[4] === '?'
        result += s[3] + '9';
    }

    return result;
};