/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let group = {};

    for (let str of strs) {
        const sortedStr = str.split('').sort();

        if (!group[sortedStr]) {
            group[sortedStr] = [];
        }

        group[sortedStr].push(str);
    }

    return Object.values(group);
};