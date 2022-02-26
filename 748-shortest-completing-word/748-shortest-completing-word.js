/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = (licensePlate, words) => {
   let map = {}
   let len = 0
   
   for (let c of licensePlate.toLowerCase()) {
       if (isNaN(c)) {
           map[c] = (map[c] || 0) + 1
           len++
       }
   }
    
   words.sort((w1, w2) => w1.length - w2.length)
    
   for (let i = 0; i < words.length; i++) {
       const word = words[i]
       if (word.length < len) continue
       
       let curMap = {...map}
       
       for (let c of word) {
           if (curMap[c]) {
             curMap[c]--
             if (curMap[c] === 0) {
                delete curMap[c]
                if (Object.keys(curMap).length === 0) {
                    return word
                }
             }
           }
           
       }
   }
};