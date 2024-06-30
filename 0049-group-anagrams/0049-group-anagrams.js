/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }

        map[sortedStr].push(str);
    }


    return Object.values(map);
};