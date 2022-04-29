/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = graph => {
    const n = graph.length
    let colors = new Array(n).fill(0)
    
    for (let i = 0; i < n; i++) {
        if (colors[i]) continue
        
        if (!canDoColoring(i, 1, graph, colors)) return false
    }
    
    return true
};

const canDoColoring = (node, color, graph, colors) => {
    if (colors[node]) {
        return color === colors[node]
    }
    
    colors[node] = color
    
    for (let i = 0; i < graph[node].length; i++) {
        const neighbor = graph[node][i]
        if (!canDoColoring(neighbor, -color, graph, colors)) {
            return false
        }
    }
    
    return true
}