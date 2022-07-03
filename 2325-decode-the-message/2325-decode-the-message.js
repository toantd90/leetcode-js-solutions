/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = (key, message) => {
  // Substitution is like a map for decoded character
  // If we find a character in message what would it transform to after decode

  // Initialize the substitution table 
  // Spaces ' ' are transformed to themselves
  let substitutionTable = {' ': ' '}
  
  // Each character maps to '' (empty string) at first
  for (let i = 0; i < 26; i++) {
    substitutionTable[String.fromCharCode(97 + i)] = ''
  }
  
  // Map each character with decoded character
  // Finished when we map all the character
  // Timespace complexity: O(n) with n is length of key
  let keyIndex = 0
  let mapIndex = 0
  while (mapIndex < 26) {
    if (!substitutionTable[key[keyIndex]] && key[keyIndex] !== ' ') {
      substitutionTable[key[keyIndex]] = String.fromCharCode(97 + mapIndex)
      mapIndex++  
    }
    keyIndex++
  }
  
  let ans = ''
  
  // Iterate over the message to decode message
  // For every single character assign it to decoded character from substitution table
  for (let i = 0; i < message.length; i++) {
    ans += substitutionTable[message[i]]
  }
  
  return ans
};