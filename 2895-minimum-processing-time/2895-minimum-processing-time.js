/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
function minProcessingTime(processorTime, tasks) {
  processorTime.sort((t1, t2) => t1 - t2);
  tasks.sort((t1, t2) => t2 - t1);

  let totalTime = 0;

  for (let i = 0; i < processorTime.length; i++) {
    let time = 0;
    for (let j = 0; j < 4; j++) {
      time = Math.max(time, tasks[4 * i + j]);
    }

    totalTime = Math.max(totalTime, time + processorTime[i]);
  }

  return totalTime;
}
