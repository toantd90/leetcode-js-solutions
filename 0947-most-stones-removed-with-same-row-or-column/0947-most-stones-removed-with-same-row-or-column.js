/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let subsetCount = stones.length;
  const parentMap = [];

  // Initialize the parent map to give each stone it's own set
  for (let i = 0; i < stones.length; i++) {
    parentMap[i] = i;
  }

  for (let thisStonesIdx = 1; thisStonesIdx < stones.length; thisStonesIdx++) {
    const thisStone = stones[thisStonesIdx];

    for (
      let thatStonesIdx = 0;
      thatStonesIdx < thisStonesIdx;
      thatStonesIdx++
    ) {
      const thatStone = stones[thatStonesIdx];

      // Not in the same row or column, skip ahead
      if (thisStone[0] !== thatStone[0] && thisStone[1] !== thatStone[1])
        continue;

      // If this stone isn't already part of an existing subset
      if (parentMap[thisStonesIdx] === thisStonesIdx) {
        // Add it to that one's subset
        parentMap[thisStonesIdx] = thatStonesIdx;
        subsetCount -= 1;
      } else {
        // Find this stone's root
        let currentThisStonesParentIndex = parentMap[thisStonesIdx];
        while (
          parentMap[currentThisStonesParentIndex] !==
          currentThisStonesParentIndex
        ) {
          currentThisStonesParentIndex =
            parentMap[currentThisStonesParentIndex];
        }

        // Find that stone's root
        let currentThatStonesParentIndex = parentMap[thatStonesIdx];
        while (
          parentMap[currentThatStonesParentIndex] !==
          currentThatStonesParentIndex
        ) {
          currentThatStonesParentIndex =
            parentMap[currentThatStonesParentIndex];
        }

        // If they're not in the same subset, merge them
        if (currentThisStonesParentIndex != currentThatStonesParentIndex) {
          parentMap[currentThisStonesParentIndex] =
            currentThatStonesParentIndex;
          subsetCount -= 1;
        }
      }
    }
  }

  return stones.length - subsetCount;
};
