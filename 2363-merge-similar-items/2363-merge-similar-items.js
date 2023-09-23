/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
function mergeSimilarItems(items1, items2) {
  let valueWeightMap = new Map();
  for (let i = 0; i < items1.length; i++) {
    valueWeightMap.set(items1[i][0], items1[i][1]);
  }

  for (let i = 0; i < items2.length; i++) {
    valueWeightMap.set(
      items2[i][0],
      (valueWeightMap.get(items2[i][0]) || 0) + items2[i][1]
    );
  }

  const values = Array.from(valueWeightMap.keys());
  const sortedValues = values.sort((v1, v2) => v1 - v2);

  return sortedValues.map((value) => [value, valueWeightMap.get(value)]);
}
