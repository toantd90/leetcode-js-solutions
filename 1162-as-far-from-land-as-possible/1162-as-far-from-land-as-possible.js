/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let res = -1, n = grid.length, map = [[], []];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const p = grid[i][j];
            map[p].push([i, j]);
        }
    }
    if (map[0].length === 0 || map[1].length === 0) {
        return -1;
    }
    for (let i = 0; i < map[0].length; i++) {
        let nearest = 9999999;
        for (let j = 0; j < map[1].length; j++) {
            const d = distance(map[0][i], map[1][j]);
            if (d < nearest) {
                nearest = d;
            }
        }
        if (nearest > res) {
            res = nearest;
        }
    }
    return res;
};

const distance = (p0, p1) => {
    const x0 = p0[0], x1 = p1[0], y0 = p0[1], y1 = p1[1];
    let d = 0;
    if (x0 > x1) {
        d += x0 - x1;
    } else {
        d += x1 - x0;
    }
    if (y0 > y1) {
        d += y0 - y1;
    } else {
        d += y1 - y0;
    }
    return d;
}