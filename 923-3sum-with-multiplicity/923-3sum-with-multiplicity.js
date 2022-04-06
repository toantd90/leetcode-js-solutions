/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const threeSumMulti = (arr, target) => {
    let res = 0
    let map = {}
    let nums = []
    for (let num of arr) {
        if (map[num]) {
            map[num]++
        } else {
            map[num] = 1
            nums.push(num)
        }
    }
    
    nums.sort((n1, n2) => n1 - n2)
    
    for (let i = 0; i < arr.length - 1; i++) {
        map[arr[i]]--
        let remain = target - arr[i]
        let l = 0, r = nums.length - 1
        
        while (l <= r) {
            if (!map[nums[l]]) {
                l++
            }
            if (!map[nums[r]]) {
                r--
            }
            
            if (l > r) break
            
            if (remain === nums[l] + nums[r]) {
                if (l === r) {
                    if (map[nums[l]] > 2) {
                        res += (map[nums[l]] - 1) * map[nums[l]] / 2
                    } else if (map[nums[l]] === 2)
                        res += 1
                        
                } else {
                    res += map[nums[l]] * map[nums[r]]
                }
                
                l++
                r--
            } else if (remain > nums[l] + nums[r]) {
                l++
            } else {
                r--
            }
        }
    }
    
    return res % (1e9 + 7)
    
};