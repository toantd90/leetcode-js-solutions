/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
const maximumBags = (capacity, rocks, additionalRocks) => {
    for (let i = 0; i < capacity.length; i++) {
        rocks[i] = capacity[i] - rocks[i]
    }
    
    rocks.sort((r1, r2) => r1 - r2)
    
    console.log(rocks)
    
    let bags = 0
    for (let i = 0; additionalRocks > 0 && i < rocks.length; i++) {
        additionalRocks -= rocks[i]
        if (additionalRocks >= 0)
            bags++
    }
   
    return bags
};