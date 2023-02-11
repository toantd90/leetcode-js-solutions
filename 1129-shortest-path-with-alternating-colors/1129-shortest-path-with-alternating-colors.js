/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
function shortestAlternatingPaths(n, redEdges, blueEdges) {
  let answer = new Array(n).fill(-1);
  let redAdjacencyList = new Array(n).fill().map((_) => new Array());
  let blueAdjacencyList = new Array(n).fill().map((_) => new Array());

  for (let [start, end] of redEdges) {
    redAdjacencyList[start].push(end);
  }

  for (let [start, end] of blueEdges) {
    blueAdjacencyList[start].push(end);
  }

  let redQueue = [0];
  let blueQueue = [0];
  let length = 0;
  let visitedBlue = new Set();
  let visitedRed = new Set();

  while (redQueue.length > 0 || blueQueue.length > 0) {
    const redSize = redQueue.length;
    const blueSize = blueQueue.length;

    for (let i = 0; i < redSize; i++) {
      const node = redQueue[i];
      visitedRed.add(node);
      if (answer[node] == -1) answer[node] = length;
      for (let nextNode of blueAdjacencyList[node]) {
        if (!visitedBlue.has(nextNode)) blueQueue.push(nextNode);
      }
    }

    for (let i = 0; i < blueSize; i++) {
      const node = blueQueue[i];
      visitedBlue.add(node);
      if (answer[node] == -1) {
        answer[node] = length;
      }
      for (let nextNode of redAdjacencyList[node]) {
        if (!visitedRed.has(nextNode)) redQueue.push(nextNode);
      }
    }

    length++;
    redQueue.splice(0, redSize);
    blueQueue.splice(0, blueSize);
  }

  return answer;
}
