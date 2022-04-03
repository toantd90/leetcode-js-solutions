/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = matches => {
    let winners = new Set()
    let losersOne = new Set()
    let losers = new Set()
    

    for (let [winner, loser] of matches) {
        if (!losers.has(winner) && !losersOne.has(winner)) {
            winners.add(winner)
        } 
        if (winners.has(loser)) {
            winners.delete(loser)
        }
        
        if (losersOne.has(loser)) {
            losersOne.delete(loser)
            losers.add(loser)
        } else {
            if (!losers.has(loser)) {
                losersOne.add(loser)
            }
        }
    }
    
    return [Array.from(winners).sort((n1, n2) => n1 - n2), Array.from(losersOne).sort((n1, n2) => n1 - n2)]
};