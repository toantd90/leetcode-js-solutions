/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = tasks => {
    let taskFreq = {}
    let tasksList = []
    
    for (const task of tasks) {
        if (taskFreq[task]) {
            taskFreq[task] = taskFreq[task] + 1    
        } else {
            tasksList.push(task)
            taskFreq[task] = 1
        }
    }
    
    let rounds = 0
    for (let i = 0; i < tasksList.length; i++) {
        if (taskFreq[tasksList[i]] < 2) return -1
        
        rounds += Math.ceil(taskFreq[tasksList[i]] / 3)
    }
    
    return rounds
};