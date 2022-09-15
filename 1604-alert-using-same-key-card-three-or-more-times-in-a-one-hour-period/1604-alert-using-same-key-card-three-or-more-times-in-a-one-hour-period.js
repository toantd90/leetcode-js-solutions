function convertTime(time) {
  const [hour, minute] = time.split(':').map(Number)
  
  return hour * 60 + minute
}

/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
function alertNames(keyName, keyTime) {
  const numOfLogs = keyName.length
  let logByWorker = {}
  
  
  for (let i = 0; i < numOfLogs; i++) {
    if (!logByWorker[keyName[i]]) {
      logByWorker[keyName[i]] = []
    }
    
    logByWorker[keyName[i]].push(convertTime(keyTime[i]))
  }
  
  
  let alertedUsers = []
  for (let worker in logByWorker) {
    const logTimes = logByWorker[worker].sort((t1, t2) => t1 - t2)
    
    for (let i = 2; i < logTimes.length; i++) {
      if (logTimes[i] - logTimes[i - 2] <= 60) {
        alertedUsers.push(worker)
        break
      }
    }
  }
  
  return alertedUsers.sort()
};