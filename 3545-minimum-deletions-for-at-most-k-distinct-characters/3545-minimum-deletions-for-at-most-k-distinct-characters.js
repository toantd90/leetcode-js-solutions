/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function minDeletion(s, k) {
    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
    }
    const nonZeroSortedCount = count.filter(c => c > 0).toSorted();

    if (k >= nonZeroSortedCount.length) return 0;

    const deletionsCount = nonZeroSortedCount.slice(0, nonZeroSortedCount.length - k);

    return deletionsCount.reduce((acc, cur) => acc + cur, 0);
};