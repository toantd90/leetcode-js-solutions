/**
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = s => {
    const c1 = s.charCodeAt(0), r1 = Number(s[1]), c2 = s.charCodeAt(3), r2 = Number(s[4])
    let ans = []
    
    for (let i = c1; i <= c2; i++) {
        for (let j = r1; j <= r2; j++) {
            ans.push(String.fromCharCode(i) + j)
        }
    }
    
    return ans
};