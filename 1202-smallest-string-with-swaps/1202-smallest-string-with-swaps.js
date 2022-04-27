/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
const smallestStringWithSwaps = (s, pairs) => {
    let len = s.length
    let parent = new Array(len).fill().map((_, i) => i)
    let ranks = new Array(len).fill(0)
    
    const findSet = u => {
        if (parent[u] !== u)
            parent[u] = findSet(parent[u])
        return parent[u]
    }
    
    const unionSet = (u, v) => {
        const up = findSet(u)
        const vp = findSet(v)
        
        if (up === vp) {
            return
        } else if (ranks[up] > ranks[vp]) {
            parent[vp] = up
        } else if (ranks[up] < ranks[vp]) {
            parent[up] = vp
        } else {
            parent[up] = vp
            ranks[vp]++
        }
    }
    
    for (const [u, v] of pairs) {
        unionSet(u, v)
    }
    
    for (let i = 0; i < len; i++) {
        parent[i] = findSet(parent[i])
    }
    
    let charsGroup = new Array(len).fill().map(_ => ({ chars: [], curIdx: 0 }))
    for (let i = 0; i < len; i++) {
        charsGroup[parent[i]].chars.push(s[i])
    }
    
    for (let i = 0; i < len; i++) {
        charsGroup[i].chars = charsGroup[i].chars.sort()
    }
    
    let ans = ''
    
    for (let i = 0; i < len; i++) {
        const parentIdx = parent[i]
        const { chars, curIdx } = charsGroup[parentIdx]
        ans += chars[curIdx]
        charsGroup[parentIdx].curIdx++
    }
    
    return ans
};