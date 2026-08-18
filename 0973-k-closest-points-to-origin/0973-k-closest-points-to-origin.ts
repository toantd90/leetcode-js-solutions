type Point = {
    x: number;
    y: number;
    distance: number;
};

function kClosest(points: number[][], k: number): number[][] {
    return points
        .map(([x, y]) => ({ x, y, distance: x ** 2 + y ** 2 }))
        .sort((point1, point2) => point1.distance - point2.distance)
        .slice(0, k)
        .map(({ x, y }) => [x, y]);
}
