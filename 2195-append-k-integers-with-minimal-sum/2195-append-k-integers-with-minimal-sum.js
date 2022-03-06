/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimalKSum = (nums, k) => {
    let remain = k
    let index = 0
    let sum = 0
    
    nums.sort((n1, n2) => n1 - n2)
    
    while (remain > 0) {
        if (index === nums.length) {
            for (let i = nums[index - 1] + 1; remain > 0; i++) {
                sum += i
                remain--
            }
            break
        }
        
        let start = index > 0 ? nums[index - 1] + 1 : 1
        
        for (let i = start; remain > 0 && i < nums[index]; i++) {
            sum += i
            remain--
        }
        
        index++
    }
    
    return sum
};