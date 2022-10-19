/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
  let wordCount = new Map()
  
  words.forEach(w => wordCount.set(w, wordCount.get(w) + 1 || 1))
  
  const sortedArray = [...wordCount.entries()].sort((a, b) => {
    if (b[1] > a[1])
      return 1
    else if (b[1] < a[1])
      return -1
    else
      if (a[0] > b[0])
        return 1
      else if (a[0] < b[0])
        return -1
      else
        return 0
  })
  
  let result = []
  for (let i = 0; i < k; i++)
    result.push(sortedArray[i][0])
  
  return result
};