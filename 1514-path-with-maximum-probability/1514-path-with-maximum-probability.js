const dijkstra = (s, graph, dist) => {
    let maxHeap = new MaxPriorityQueue({ priority: x => x[1] });
    maxHeap.enqueue([s, 1])
    
    while (!maxHeap.isEmpty()) {
        const [u, w] = maxHeap.dequeue().element
        // if (dist[u] > w) continue
        
        for (let [v, newW] of graph[u]) {
            if (w * newW > dist[v]) {
                dist[v] = w * newW
                maxHeap.enqueue([v, dist[v]])
            }
        }
    }
}



/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
const maxProbability = (n, edges, succProb, start, end) => {
    let dist = new Array(n).fill(-Infinity)
    
    let graph = new Array(n).fill().map(_ => new Array())
    
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i]
        const w = succProb[i]
        graph[u].push([v, w])
        graph[v].push([u, w])
    }
    
    dijkstra(start, graph, dist)
    
    return dist[end] === -Infinity ? 0 : dist[end]
};