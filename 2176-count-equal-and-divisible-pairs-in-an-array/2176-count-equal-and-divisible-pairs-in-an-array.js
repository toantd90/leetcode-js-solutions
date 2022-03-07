/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs = (nums, k) => {
    let res = 0
    let map = {}
    
    nums.forEach((num, index) => {
         if (!map[num]) {
            map[num] = []
        }
        
        map[num].push(index)
    })
    
    
    for (const key in map) {
        for (let i = 0; i < map[key].length; i++) {
            for (let j = i + 1; j < map[key].length; j++) {
                if (map[key][i] * map[key][j] % k === 0)
                    res++
            }
        }
    }
    
    
    return res
};