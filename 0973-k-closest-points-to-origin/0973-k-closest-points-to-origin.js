/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const pointsQueue = new MaxPriorityQueue({ priority: (point) => point.distance });

    for (let [x, y] of points) {
        const distance = Math.sqrt(x * x + y * y);
        if (pointsQueue.size() < k) {
            pointsQueue.enqueue({ point: [x, y], distance });
        } else {
            if (pointsQueue.front().element.distance > distance) {
                pointsQueue.dequeue();
                pointsQueue.enqueue({ point: [x, y], distance });
            }
        }
    }

    return pointsQueue.toArray().map(point => point.element.point)
};