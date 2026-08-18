type Point = {
    x: number;
    y: number;
    distance: number;
}

function kClosest(points: number[][], k: number): number[][] {
    const transformedPoints = points.map(([x, y]) => ({ x, y, distance: x ** 2 + y ** 2 }));
    const maxHeap = new MaxPriorityQueue<Point>(({ distance }: Point) => distance, transformedPoints.slice(0, k));

    for (let i = k; i < transformedPoints.length; i++) {
        const farthestPoint = maxHeap.front();
        const { distance: farthestDistance } = farthestPoint;

        const currentPoint = transformedPoints[i];
        const { distance: currentDistance } = currentPoint;

        if (farthestDistance > currentDistance) {
            maxHeap.dequeue();
            maxHeap.enqueue(currentPoint)
        }
    }

    return maxHeap.toArray().map(({ x, y }) => ([x, y]));
};