/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if (source === destination) return true
    let graph = new Array(n).fill().map(_ => [])
    let visited = new Array(n).fill(false)

    for (let [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    
    let queue = [source]
    visited[source] = true
    
    while (queue.length) {
        const u = queue.shift()
        
        for (let v of graph[u]) {
            if (v === destination) return true
            
            if (!visited[v]) {
                visited[v] = true
                queue.push(v)
            }
        }
        
    }
    
    return false
};