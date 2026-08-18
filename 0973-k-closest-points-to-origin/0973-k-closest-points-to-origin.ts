type Point = {
    x: number;
    y: number;
    distance: number;
}

function kClosest(points: number[][], k: number): number[][] {
    const maxHeap = new MaxPriorityQueue<Point>(
        ({ distance }: Point) => distance,
        points.slice(0, k).map(([x, y]) => ({ x, y, distance: x ** 2 + y ** 2 }))
    );

    for (let i = k; i < points.length; i++) {
        const farthestPoint = maxHeap.front();
        const { distance: farthestDistance } = farthestPoint;

        const [x, y] = points[i];
        const currentDistance = x ** 2 + y ** 2;

        if (farthestDistance > currentDistance) {
            maxHeap.dequeue();
            maxHeap.enqueue({ x, y, distance: currentDistance })
        }
    }

    return maxHeap.toArray().map(({ x, y }) => ([x, y]));
};