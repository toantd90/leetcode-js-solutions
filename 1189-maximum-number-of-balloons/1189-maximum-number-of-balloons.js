/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = text => {
  let map = { b: 0, a: 0, l: 0, o: 0, n: 0 }
  
  for (let c of text) {
    if (map[c] != undefined) {
      map[c]++
    }
  }
  
  return Math.min(map['b'], map['a'], Math.floor(map['l'] / 2), Math.floor(map['o'] / 2), map['n'])
};