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
        
        let cnt = 0
        let cur = num
        
        while (!visited[cur]) {
            visited[cur] = true
            cur = nums[cur]
            cnt++
        }
        
        if (cnt > longestPath) {
            longestPath = cnt
        }
    }

    
    return longestPath
};