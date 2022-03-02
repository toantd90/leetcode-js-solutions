/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = nums => {
    let map = {}
    
    nums.forEach(num => {
        map[num] = (map[num] || 0) + 1
    })
    
    let freq = {}
    
    Object.entries(map).forEach(([key, value]) => {
        if (!freq[value]) freq[value] = []
        freq[value].push(...new Array(value).fill(Number(key)))
    })
    
    const res = Object.keys(freq).sort((n1, n2) => n1 - n2).reduce((acc, cur) => {
        const val = freq[cur].sort((n1, n2) => n2 - n1)
        acc.push([...val])
        return acc
    }, [])
    
    
    return res.flat()
};