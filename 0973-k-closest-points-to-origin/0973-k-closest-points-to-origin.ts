type Point = {
    x: number;
    y: number;
    distance: number;
}

function kClosest(points: number[][], k: number): number[][] {
    const transformedPoints = points.map(([x, y]) => ({ x, y, distance: x ** 2 + y ** 2 }));
    const minHeap = new MinPriorityQueue<Point>(({ distance }: Point) => distance, transformedPoints);

    let result = [];
    for (let i = 0; i < k; i++) {
        const point = minHeap.dequeue();
        const { x, y } = point;
        result.push([x, y]);
    }

    return result;
};