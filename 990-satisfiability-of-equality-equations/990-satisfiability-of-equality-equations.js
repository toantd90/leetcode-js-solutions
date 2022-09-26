const NUM_OF_CHARS = 26
const A_CHAR_CODE = 97

function buildGraph(equations) {
  let graph = new Array(NUM_OF_CHARS).fill().map(_ => new Array())
  
  for (let equation of equations) {
    if (equation[1] == '=') {
      const startNode = equation.charCodeAt(0) - A_CHAR_CODE
      const endNode = equation.charCodeAt(3) - A_CHAR_CODE
    
      graph[startNode].push(endNode)
      graph[endNode].push(startNode)  
    }
  }
  
  return graph
}

function dfs(node, color, colorNodes, graph) {
  if (colorNodes[node] == -1) {
    colorNodes[node] = color
    
    for (let nextNode of graph[node]) {
      dfs(nextNode, color, colorNodes, graph)
    }
  }
}

function isEquationsPossible(equations, colorNodes) {
  for (let equation of equations) {
    const startNode = equation.charCodeAt(0) - A_CHAR_CODE
    const endNode = equation.charCodeAt(3) - A_CHAR_CODE
    if (equation[1] == '!' && colorNodes[startNode] == colorNodes[endNode]) {
      return false
    }
  }
  
  return true
}

/**
 * @param {string[]} equations
 * @return {boolean}
 */
function equationsPossible(equations) {
  const graph = buildGraph(equations)
  
  let colorNodes = new Array(NUM_OF_CHARS).fill(-1)
  
  for (let i = 0; i < NUM_OF_CHARS; i++) {
    dfs(i, i, colorNodes, graph)
  }
  
  return isEquationsPossible(equations, colorNodes)
};