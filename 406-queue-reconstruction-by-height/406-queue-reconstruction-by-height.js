/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  const n = people.length
  let res = new Array(n)
  
  people.sort((p1, p2) => p1[0] - p2[0])
  
  for (let i = 0; i < n; i++) {
    const [h, k] = people[i]
    let taller = 0
    let index = 0
    
    while (taller < k) {
      if (!res[index] || res[index][0] >= h) taller++
      index++
    }
    
    while (res[index]) {
      index++
    }
    
    res[index] = people[i]
  }
  
  return res
};