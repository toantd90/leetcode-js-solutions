/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
   const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
   
   let uniqueTransform = new Set()
   
   for (let word of words) {
     let encode = ''
     for (let i = 0; i < word.length; i++) {
       encode += morseCode[word.charCodeAt(i) - 97]
     }
     
     uniqueTransform.add(encode)
   }
  
  return uniqueTransform.size
};