function binarySearch(arr, value) {
    let l = 0;
    let r = arr.length;
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (arr[mid] > value) {
            r--
        } else if (arr[mid] < value) {
            l++;
        } else {
            return mid;
        }
    }
}

/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
function countCoveredBuildings(n, buildings) {
    let xMap = {};
    let yMap = {};
    
    for (let [x, y] of buildings) {
        if (!xMap[x]) {
            xMap[x] = [];
        }
        
        if (!yMap[y]) {
            yMap[y] = [];
        }
        
        xMap[x].push(y);
        yMap[y].push(x);
    }
    
    for (let x in xMap) {
        xMap[x] = xMap[x].toSorted((x1, x2) => x1 - x2);
    }
    
    for (let y in yMap) {
        yMap[y] = yMap[y].toSorted((y1, y2) => y1 - y2);
    }
    
    let count = 0;
    
    for (let [x, y] of buildings) {
        const smallestX = yMap[y][0];
        const biggestX = yMap[y][yMap[y].length - 1];
        const smallestY = xMap[x][0];
        const biggestY = xMap[x][xMap[x].length - 1];
        if (x > smallestX && x < biggestX && y > smallestY && y < biggestY) {
            count++;
        }
    }
    
    return count;
};
