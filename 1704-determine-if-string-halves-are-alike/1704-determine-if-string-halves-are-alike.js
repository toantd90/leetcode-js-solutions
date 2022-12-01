/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let firstHalf = [0, 0]
  let secondHalf = [0, 0]
  for (let i = 0;  i < s.length / 2; i++)   {
    if (vowels.includes(s[i])) {
      firstHalf[0]++
    } else {
      firstHalf[1]++
    }
    
    
    if (vowels.includes(s[s.length / 2 + i])) {
      secondHalf[0]++
    } else {
      secondHalf[1]++
    }
  }
  
  return firstHalf[0] == secondHalf[0]
};