/**
 * @param {number[][]} properties
 * @return {number}
 */
function numberOfWeakCharacters(properties) {
  properties.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));

  let weakCharacters = 0;
  let maxDefense = 0;

  console.log(properties);

  for (let i = properties.length - 1; i >= 0; i--) {
    if (properties[i][1] < maxDefense) {
      weakCharacters++;
    }

    maxDefense = Math.max(maxDefense, properties[i][1]);
  }

  return weakCharacters;
}
