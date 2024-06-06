/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let chairs = 0;
    let min = 0;

    for (let chair of s) {
        if (chair === 'E') {
            chairs++;
        } else {
            min = Math.max(min, chairs);
            chairs--;
        }
    }

    return Math.max(min, chairs);
};