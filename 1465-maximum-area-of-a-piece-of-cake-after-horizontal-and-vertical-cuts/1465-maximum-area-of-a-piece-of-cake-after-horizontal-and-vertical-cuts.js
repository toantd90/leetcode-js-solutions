/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxArea = (h, w, horizontalCuts, verticalCuts) => {
  horizontalCuts.sort((h1, h2) => h1 - h2)
  verticalCuts.sort((v1, v2) => v1 - v2)
  
  let maxHeight = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length - 1])
  let maxWidth = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length - 1])
  
  for (let i = 1; i < horizontalCuts.length; i++) {
    maxHeight = Math.max(maxHeight, horizontalCuts[i] - horizontalCuts[i - 1])
  }
  
  for (let j = 1; j < verticalCuts.length; j++) {
    maxWidth = Math.max(maxWidth, verticalCuts[j] - verticalCuts[j - 1])
  }
  
  return BigInt(maxHeight) * BigInt(maxWidth) % 1000000007n
};