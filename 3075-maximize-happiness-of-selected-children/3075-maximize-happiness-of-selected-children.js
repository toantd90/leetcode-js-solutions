/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
function maximumHappinessSum(happiness, k) {
    let heap = new MaxPriorityQueue();

    for (let h of happiness) {
        heap.enqueue(h);
    }

    let turns = k;
    let maxHappiness = 0;
    while (turns > 0) {
        const increaseHappiness = heap.dequeue().element - (k - turns);
        maxHappiness += Math.max(0, increaseHappiness);
        turns--;
    }

    return maxHappiness;
};