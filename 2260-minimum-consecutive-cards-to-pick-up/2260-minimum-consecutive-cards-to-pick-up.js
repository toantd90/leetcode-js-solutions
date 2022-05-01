/**
 * @param {number[]} cards
 * @return {number}
 */
const minimumCardPickup = cards => {
    let map = {}
    let min = cards.length + 1
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        if (!map[card]) {
            map[card] = [i]    
        } else {
            const top = map[card][map[card].length - 1]
            map[card].push(i)
            
            min = Math.min(min, i - top + 1)
        }
    }
    
    return min === cards.length + 1 ? -1 : min
};