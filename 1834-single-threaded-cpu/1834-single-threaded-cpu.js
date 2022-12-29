/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
function getOrder(tasks) {
  const n = tasks.length;
  tasks = tasks
    .map((task, index) => [...task, index])
    .sort((t1, t2) => t1[0] - t2[0]);

  let availableTasksHeap = new MinPriorityQueue({
    priority: ([e, p, idx]) => p + 10 ** -7 * (idx + 1),
  });

  let processingIndex = 0;
  let currentTime = tasks[0][0];

  let res = [];

  while (processingIndex < n || availableTasksHeap.size() > 0) {
    while (processingIndex < n && tasks[processingIndex][0] <= currentTime) {
      availableTasksHeap.enqueue(tasks[processingIndex]);
      processingIndex++;
    }

    if (availableTasksHeap.size() > 0) {
      const processingTask = availableTasksHeap.dequeue().element;

      res.push(processingTask[2]);

      currentTime += processingTask[1];
    } else {
      currentTime = tasks[processingIndex][0];
    }
  }

  return res;
}
