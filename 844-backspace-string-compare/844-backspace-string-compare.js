/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isBackSpace = char => char === '#'

const backspaceCompare = (s, t) => {
    let p1 = 0
    let p2 = 0
    let s1 = []
    let s2 = []
    
    while (p1 < s.length || p2 < t.length) {
        if (p1 < s.length) {
          if (isBackSpace(s[p1])) s1.pop()
          else s1.push(s[p1])
          p1++
        }
        
        if (p2 < t.length) {
          if (isBackSpace(t[p2])) s2.pop()
          else s2.push(t[p2])
          p2++
        }
    }
    
    return s1.join('') === s2.join('')
};