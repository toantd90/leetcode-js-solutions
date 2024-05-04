/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
    people.sort((p1, p2) => p1 - p2)
    
    let l = 0, r = people.length - 1
    let boat = 0
    
    while (l <= r) {
        if (people[l] + people[r] <= limit) {
            l++
        } 
        boat++
        r--
    }
    
    return boat
};