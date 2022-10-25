function isCyclic(currentLetter, currentStack, visited, dictionary, graph) {
  if (currentStack.has(currentLetter)) {
    return true;
  }

  if (visited.has(currentLetter)) {
    return false;
  }

  currentStack.add(currentLetter);
  visited.add(currentLetter);

  let nextLetters = graph[currentLetter];
  if (nextLetters) {
    for (let letter of nextLetters) {
      if (isCyclic(letter, currentStack, visited, dictionary, graph)) {
        return true;
      }
    }
  }
  
  dictionary.push(currentLetter);
  currentStack.delete(currentLetter);

  return false;
}



/**
 * @param {string[]} words
 * @return {string}
 */
function alienOrder(words) {
  let graph = {};
  
  if (words.length == 1) return Array.from(new Set(words[0])).join('')

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let needToCheck = true
      for (let k = 0; k < words[i].length; k++) {
        if (!graph[words[i][k]]) graph[words[i][k]] = new Set()
        
        if (needToCheck && words[i][k] !== words[j][k]) {
          needToCheck = false
          graph[words[i][k]].add(words[j][k]);
        }
        
        if (k == words[j].length - 1 && k < words[i].length - 1 && needToCheck) {
          return ''
        }
      }
      
      for (let k = 0; k < words[j].length; k++) {
        if (!graph[words[j][k]]) graph[words[j][k]] = new Set()
      }
    }
  }
  
  let visited = new Set()
  let currentStack = new Set()
  let dictionary = []
  
  for (let letter in graph) {
    if (isCyclic(letter, visited, currentStack, dictionary , graph)) {
      return ''
    }
  }
  
  
  return dictionary.reverse().join('');
}
