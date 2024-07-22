/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
    if (n === k) return 0;

    let nBinary = n.toString(2);
    let kBinary = k.toString(2);

    if (nBinary.length > kBinary.length) {
        kBinary = '0'.repeat(nBinary.length - kBinary.length) + kBinary;
    } else {
        nBinary = '0'.repeat(kBinary.length - nBinary.length) + nBinary;
    }

    for (let i = 0; i < nBinary.length; i++) {
        if (nBinary[i] === '0' && kBinary[i] === '1') {
            return false;
        }
    }

    return true;
};