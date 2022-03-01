/**
 * @param {number} num
 * @return {number}
 */
const countEven = num => {
    let ans = 0
    for (let i = 2; i <= num; i++) {
        let n = i
        let digitsSum = 0
        while (n > 0) {
            digitsSum += n % 10
            n = Math.floor(n / 10)
        }
        
        if (digitsSum % 2 === 0)
            ans++
    }
    
    return ans
}