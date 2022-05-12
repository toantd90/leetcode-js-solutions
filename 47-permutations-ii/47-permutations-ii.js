/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = nums => {
    let counter = {}
    let result = []
    let keys = []
    
    for (let num of nums) {
        if (!counter[num]) {
            counter[num] = 1
            keys.push(num)
        } else {
            counter[num]++    
        }
    }
    
    const backtrack = (list) => {
        if (list.length === nums.length) {
            result.push([...list])
            return
        }
        
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            if (!counter[key]) continue
            list.push(key)
            counter[key]--
            
            backtrack(list)
            
            list.pop()
            counter[key]++
        }
    }
    
    backtrack([])
        
        
    return result
};


