/**
 * @param {number[][]} properties
 * @return {number}
 */
function numberOfWeakCharacters(properties) {
  
  properties.sort((p1, p2)  => {
    if (p1[0] > p2[0]) {
      return 1
    } else if (p1[0] < p2[0]) {
      return -1
    } else {
      if (p1[1] > p2[1]) {
        return -1
      } else {
        return 1
      }
    }
  })
  
  let stack = [properties[0][1]]
  let numOfWeak = 0
  
  for (let i = 1; i < properties.length; i++) {
    const [curAtk, curDef] = properties[i]
    const [preAtk, preDef] = properties[i - 1]
    let top = stack.length ? stack[stack.length - 1] : -1
    
    while (top != -1 && top < curDef && curAtk != preAtk) {
      stack.pop()
      top = stack.length ? stack[stack.length - 1] : -1
      numOfWeak++
    }

    stack.push(curDef)
  }
        
  return numOfWeak
};