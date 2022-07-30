function isSubsetFn (source, target) {
  const chars = Object.keys(source)
  
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    if (!target[char] || target[char] < source[char])
      return false
  }
  
  return true
}

function wordCount (word) {
  let cnt = {}

  for (let c of word) {
    cnt[c] = (cnt[c] || 0) + 1
  }
  
  return cnt
}

function wordsCount (words) {
  let wordCounts = []
  
  for (let word of words) {
    wordCounts.push(wordCount(word))
  }
  
  return wordCounts
}

function maxWordsCount (words) {
  let maxCount = {}
  
  for (let word of words) {
    const count = wordCount(word)
    
    for (let char in count) {
      maxCount[char] = Math.max(maxCount[char] || 0, count[char])
    }
  }
  
  return maxCount
}

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
function wordSubsets (words1, words2) {
  let subsets = []
  
  let words1Count = wordsCount(words1)
  let words2MaxCount = maxWordsCount(words2)
  
  for (let i = 0; i < words1.length; i++) {
    if (isSubsetFn(words2MaxCount, words1Count[i])) {
      subsets.push(words1[i])
    }
  }
  
  return subsets
};