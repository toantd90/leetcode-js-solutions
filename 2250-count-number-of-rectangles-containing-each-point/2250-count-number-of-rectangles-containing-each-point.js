const binarySearch = (arr, target) => {
    let l = 0, r = arr.length - 1
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return l
}

/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
const countRectangles = (rectangles, points) => {
    let bucket = new Array(101).fill().map(_ => new Array())
    
    for (let [l, h] of rectangles) {
        bucket[h].push(l)
    }
    
    for (let i = 1; i < 101; i++) {
        bucket[i] = bucket[i].sort((l1, l2) => l1 - l2)
    }
    
    let numberOfRectangles = []
    
    for (let [x, y] of points) {
        let cur = 0
        for (let i = y; i <= 100; i++) {
            if (!bucket[i].length) continue
            const foundIndex = binarySearch(bucket[i], x)
            cur += bucket[i].length - foundIndex
        }
        numberOfRectangles.push(cur)
    }

    
    return numberOfRectangles
};