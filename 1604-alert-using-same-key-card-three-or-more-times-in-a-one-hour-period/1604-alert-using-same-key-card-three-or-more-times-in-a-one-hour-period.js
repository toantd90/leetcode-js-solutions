/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
function alertNames(keyName, keyTime) {
  let workerTimeMap = {}
  let workers = []
  
  
  for (let i = 0; i < keyName.length; i++) {
    const workerName = keyName[i]
    
    const [hour, minute] = keyTime[i].split(':').map(Number)
    const time = hour * 60 + +minute
    
    if (!workerTimeMap[workerName]) {
      workers.push(workerName)
      workerTimeMap[workerName] = []
    }
    
    workerTimeMap[workerName].push(time)
  }
  
  let alertedWorkers = []
  
  for (let i = 0; i < workers.length; i++) {
    const workerName = workers[i]
    
    const times = workerTimeMap[workerName].sort((t1, t2) => t1 - t2)
    
    for (let i = 0; i < times.length - 2; i++) {
      if (times[i + 2] - times[i] <= 60) {
        alertedWorkers.push(workerName)
        break
      }
    }
  }
  
  alertedWorkers.sort()
  
  return alertedWorkers
};