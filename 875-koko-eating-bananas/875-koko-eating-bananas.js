const hoursToFinishPiles = (piles, speed) => {
    let hours = 0
    for (let bananas of piles) {
        hours += Math.ceil(bananas / speed)
    }
    
    return hours
}


/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
    if (piles.length === 1) return Math.ceil(piles[0] / h)
    
    let l = 1;
    let r = 1e9 + 1;
    
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (hoursToFinishPiles(piles, mid) > h) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return l
};