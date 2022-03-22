/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = nums => {
    let longestPath = 0
    let visited = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        
        if (visited[num]) continue
        
        let path = new Set()
        let cur = num
        
        while (!path.has(cur)) {
            path.add(cur)
            cur = nums[cur]
        }
        
        
        Array.from(path.values()).forEach(node => {
            visited[node] = path.size
        })
        if (path.size > longestPath) {
            longestPath = path.size
        }
    }

    
    return longestPath
};