type Point = {
    x: number;
    y: number;
    distance: number;
}

function kClosest(points: number[][], k: number): number[][] {
    const minHeap = new MinPriorityQueue<Point>(({ distance }: Point) => distance);

    for (let point of points) {
        minHeap.enqueue({ x: point[0], y: point[1], distance: Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2)) });
    }

    let result = [];
    for (let i = 0; i < k; i++) {
        const point = minHeap.dequeue();
        const { x, y } = point;
        result.push([x, y]);
    }

    return result;
};