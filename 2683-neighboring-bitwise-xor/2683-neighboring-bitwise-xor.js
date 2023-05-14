/**
 * @param {number[]} derived
 * @return {boolean}
 */
function doesValidArrayExist(derived) {
  const n = derived.length;
  if (n === 1) {
    return derived[0] === 0;
  }

  let original = new Array(n);

  if (derived[0] === 1) {
    original[0] = 0;
    original[1] = 1;
  } else {
    original[0] = 0;
    original[1] = 0;
  }

  for (let i = 1; i < n - 1; i++) {
    if (derived[i] === 1) {
      if (original[i] === 0) {
        original[i + 1] = 1;
      } else {
        original[i + 1] = 0;
      }
    } else {
      original[i + 1] = original[i];
    }
  }

  if (derived[n - 1] === 1) {
    return original[0] !== original[n - 1];
  } else {
    return original[0] === original[n - 1];
  }
}
