/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  let groupStr = {};

  for (let str of strs) {
    const sorted = str.split("").toSorted().join("");

    if (groupStr[sorted]) {
      groupStr[sorted].push(str);
    } else {
      groupStr[sorted] = [str];
    }
  }

  return Object.entries(groupStr).map(([_, values]) => [...values]);
}
