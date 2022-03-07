/**
 * @param {number} num
 * @return {number[]}
 */
const sumOfThree = num => {
    const average = Math.floor(num / 3)
    
    if (3 * average === num) {
        return [average - 1, average, average + 1]
    }
    
    if (3 * average + 3 === num) {
        return [average, average + 1, average + 2]
    }
    
    return []
};