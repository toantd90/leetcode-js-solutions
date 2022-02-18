/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = graph => {
    const n = graph.length
    let res = []
    
    const dfs = (node, path) => {
        if (node === n - 1) {
            res.push(path.slice())
            return
        }
        
        for (let nextNode of graph[node]) {
            path.push(nextNode)
            dfs(nextNode, path)
            path.pop()
        }
    }
    
    dfs(0, [0])
    
    return res
};