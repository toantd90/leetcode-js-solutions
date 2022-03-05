/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = (mapping, nums) => {
    let mapNums = []
    nums.forEach((num, index) => {
        let numStr = ''
        if (num === 0) numStr = mapping[0]

        while (num > 0) {
            numStr = mapping[num % 10] + numStr
            num = Math.floor(num / 10)
        }
        
        mapNums.push([Number(numStr), nums[index]]) 
    })

    mapNums.sort((n1, n2) => n1[0] - n2[0])
    return mapNums.map(num => num[1])
};