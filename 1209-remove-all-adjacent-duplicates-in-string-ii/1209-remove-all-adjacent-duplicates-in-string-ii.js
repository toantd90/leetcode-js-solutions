/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = (s, k) => {
   let stack = []
   let stackCount = []
   for (let i = 0; i < s.length; i++) {
       const count = { ...stackCount[stackCount.length - 1] } || {}
       if (stack.length >= k - 1) {
           count[stack[stack.length - k]]--
           count[s[i]] = (count[s[i]] || 0) + 1
           
           if (count[s[i]] === k) {
               stack.length = stack.length - k + 1
               stackCount.length = stackCount.length - k + 1
           } else {
               stack.push(s[i])
               stackCount.push(count)
           }
       } else {
           stack.push(s[i])
           count[s[i]] = (count[s[i]] || 0) + 1
           stackCount.push(count)
       }
       
   }
    
   return stack.join('')
};