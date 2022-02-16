/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const bfs = (start, graph, visited) => {
    let queue = [start]
    visited[start] = true
    
    while (queue.length) {
        const rootCity = queue.shift()
        
        for (let connectedCity of graph[rootCity]) {
            if (!visited[connectedCity]) {
                visited[connectedCity] = true
                queue.push(connectedCity)
            }
        }
        
    }
}
const findCircleNum = isConnected => {
    const n = isConnected.length
    let graph = new Array(n).fill([])
    let visited = new Array(n).fill(false)
    
    isConnected.forEach((connections, rootId) => {
        let connectedCities = []
        connections.forEach((hasConnection, toId) => {
            if (toId !== rootId && hasConnection) {
                connectedCities.push(toId)
            }
        })
        graph[rootId] = connectedCities
    })
    
    let numOfProvinces = 0
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(i, graph, visited)
            numOfProvinces++
        }
    }
    
    return numOfProvinces
};