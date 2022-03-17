const buildGraph = (points, graph) => {
    for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i]
        for (let j = 1; j < points.length; j++) {
            const [x2, y2] = points[j]
            const distance = Math.abs(x1 - x2) + Math.abs(y1 -y2)
            
            graph[i].push([j, distance])
        }
    }
}

const prims = (graph, visited, dist) => {
    let priorityQueue = new MinPriorityQueue({ priority: point => point[1]})
    priorityQueue.enqueue([0, 0])
    dist[0] = 0
    
    
    while (!priorityQueue.isEmpty()) {
        const [u] = priorityQueue.dequeue().element
        visited[u] = true
        
        
        for (let i = 0; i < graph[u].length; i++) {
            const [v, w] = graph[u][i]
            
            if (!visited[v] && dist[v] > w) {
                dist[v] = w
                priorityQueue.enqueue([v, w])
            }
                
        }
    }
}


/**
 * @param {number[][]} points
 * @return {number}
 */
const minCostConnectPoints = points => {
    const numOfPoints = points.length
    let graph = new Array(numOfPoints).fill().map(_ => new Array())
    let dist = new Array(numOfPoints).fill(Infinity)
    let visited = new Array(numOfPoints).fill(false)
    
    buildGraph(points, graph)
    
    prims(graph, visited, dist)
      
    return dist.reduce((acc, cur) => acc + cur, 0)
};