/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
const maxConsecutive = (bottom, top, special) => {
  special.sort((s1, s2) => s1 - s2);
  let floors = special[0] - bottom;

  for (let i = 1; i < special.length; i++) {
    floors = Math.max(floors, special[i] - special[i - 1] - 1);
  }

  floors = Math.max(floors, top - special.pop());

  return floors;
};
