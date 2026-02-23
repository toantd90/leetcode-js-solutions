/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
function eliminateMaximum(dist, speed) {
    const n = dist.length;
    const times = new Array(n);

    for (let i = 0; i < n; i++) {
        times[i] = Math.ceil(dist[i] / speed[i]);
    }

    times.sort((t1, t2) => t1 - t2);

    for (let i = 0; i < n; i++) {
        if (times[i] < i + 1) {
            return i;
        }
    }

    return n;
};