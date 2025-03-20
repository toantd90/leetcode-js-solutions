/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
    let ans = new Array(k).fill(0);
    let uam = {};

    for (let [id, time] of logs) {
        if (!uam[id]) {
            uam[id] = new Set();
        }

        uam[id].add(time);
    }

    Object.values(uam).forEach(times => ans[times.size - 1]++);

    return ans;
};