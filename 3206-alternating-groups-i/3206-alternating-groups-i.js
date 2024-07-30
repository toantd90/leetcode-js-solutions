/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
    const n = colors.length;
    let groups = 0;
    for (let i = 0; i < n - 2; i++) {
        if (colors[i] === colors[i + 2] && colors[i] !== colors[i + 1]) {
            groups++;
        }
    }

    if (colors[n - 2] === colors[0] && colors[n - 2] !== colors[n - 1]) {
        groups++;
    }

    if (colors[n - 1] === colors[1] && colors[0] !== colors[1]) {
        groups++;
    }

    return groups;
};