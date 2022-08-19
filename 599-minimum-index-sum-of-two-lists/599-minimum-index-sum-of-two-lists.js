/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let map = new Map()
  
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i)
  }
  
  let leastListIndexSum = 2002
  let commonInterestRestaurants = []
  
  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      let curListIndexSum = map.get(list2[i]) + i
      if (curListIndexSum < leastListIndexSum) {
        leastListIndexSum = curListIndexSum
        commonInterestRestaurants = [list2[i]]
        continue
      }
      if (curListIndexSum == leastListIndexSum) {
        commonInterestRestaurants.push(list2[i])
      }
    }
  }
  
  return commonInterestRestaurants
};