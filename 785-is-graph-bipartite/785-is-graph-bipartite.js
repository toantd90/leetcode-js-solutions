/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = graph => {
    const n = graph.length
    let color = new Array(n).fill(0)
    
    for (let i = 0; i < n; i++) {
        if (color[i]) continue
        
        let queue = [i]
    
        color[i] = 1

        while (queue.length) {
            const cur = queue.shift()
            const neighbors = graph[cur]

            for (let i = 0; i < neighbors.length || 0; i++) {
                const neighbor = neighbors[i]
                if (color[neighbor] === 0) {
                    color[neighbor] = -color[cur]
                    queue.push(neighbor)
                } else {
                    if (color[cur] === color[neighbor]) return false
                }
            }
        }
    }
    
    
    
    return true
    
};