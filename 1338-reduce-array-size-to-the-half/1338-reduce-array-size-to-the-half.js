/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr) {
  const half = arr.length / 2
  
  let cnt = {}
  
  for (let num of arr) {
    cnt[num] = (cnt[num] || 0) + 1
  }
  
  let frequency = Object.values(cnt)
  
  frequency.sort((f1, f2) => f2 - f1)
  
  let sizeOfSet = 0
  
  for (let i = 0; i < frequency.length; i++) {
    sizeOfSet += frequency[i]
    
    if (sizeOfSet >= half) {
      return i + 1
    }
  }
};