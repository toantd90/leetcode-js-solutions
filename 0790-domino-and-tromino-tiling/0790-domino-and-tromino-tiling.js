/**
 * @param {number} n
 * @return {number}
 */
const numTilings = n => {
    if (n < 3) return n
    
    let p1 = 1, p2 = 1, p3 = 2
    
    for (let i = 3; i <= n; i++) {
        const temp = (2 * p3 + p1) % (1e9 + 7)
        p1 = p2
        p2 = p3
        p3 = temp
    }
    
    return p3
};