/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = colors => {
    let l = 0; r = colors.length - 1
    while (colors[0] === colors[r] && colors[l] === colors[colors.length - 1]) {
        r--
        l++
    }
    
    return Math.max(r - 0, colors.length - 1 - l)
};