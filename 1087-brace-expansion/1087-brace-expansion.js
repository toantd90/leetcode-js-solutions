/**
 * @param {string} s
 * @return {string[]}
 */
const expand = s => {
    let ans = ['']
    let options = ''
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{') {
            let optionStr = ''
            i++
            while (s[i] !== '}') {
                optionStr += s[i]
                i++
            }
            const options = optionStr.split(',').sort()
            ans = ans.reduce((acc, word) => {
                return acc.concat(options.map(option => word + option))
            }, [])
        } else {
            ans = ans.map(word => word + s[i])
        }
    }
    
    return ans
};