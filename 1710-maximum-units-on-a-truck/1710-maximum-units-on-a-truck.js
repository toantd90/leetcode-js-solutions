/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort(([numberOfBoxes1, numberOfUnitsPerBox1] , [numberOfBoxes2, numberOfUnitsPerBox2]) => {
    if (numberOfUnitsPerBox1 > numberOfUnitsPerBox2) {
      return -1
    } else if (numberOfUnitsPerBox1 < numberOfUnitsPerBox2) {
      return 1
    } else {
      if (numberOfBoxes1 < numberOfBoxes2) {
        return -1
      } else {
        return 1
      }  
    }
  })
  
  const n = boxTypes.length
  let boxIndex = 0
  let maximumUnits = 0
  
  while (truckSize > 0 && boxIndex <= n - 1) {
    const canTakeBoxes = Math.min(truckSize, boxTypes[boxIndex][0])
    truckSize -= canTakeBoxes
    maximumUnits += canTakeBoxes * boxTypes[boxIndex][1]
    boxIndex++
  }
  
  return maximumUnits
};