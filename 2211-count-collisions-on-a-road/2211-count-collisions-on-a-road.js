/**
 * @param {string} directions
 * @return {number}
 */
const countCollisions = directions => {
    if (directions.length === 1) return 0
    let stack = [directions[0]]
    let collisions = 0
    for (let i = 1; i < directions.length; i++) {
        const top = stack[stack.length - 1]
        if ((directions[i] === 'L' && (top === 'S' || top === 'R')) || (directions[i] === 'S' && top === 'R')) {
            stack.pop()
            stack.push('S')
            
            if (directions[i] === 'L' && top === 'R') {
                collisions += 2
            } else {
                collisions++
            }
        } else {
            stack.push(directions[i])
        }
    }
    
    
    for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] === 'S') {
            continue
        } else if (stack[i] === 'R') {
            if (!stack[i + 1] || stack[i + 1] === 'R') {
                continue
            } else {
                stack[i] = 'S'
                collisions++
            }
        } else {
            if (!stack[i - 1] || stack[i - 1] === 'L') {
                continue
            } else {
                stack[i] = 'S'
                collisions++
            }
        }
    }
    
    return collisions
};