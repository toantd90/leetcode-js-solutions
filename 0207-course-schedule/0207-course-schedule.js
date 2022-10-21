/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function isCyclic(currentCourse, currentStack, visited, graph) {
  if (currentStack[currentCourse]) {
    return true
  }
  
  if (visited[currentCourse]) {
    return false
  }
  
  currentStack[currentCourse] = true
  visited[currentCourse] = true
  
  let nextCourses = graph[currentCourse]
  for (let course of nextCourses) {
    if (isCyclic(course, currentStack, visited, graph)) {
      return true
    }
  }
  
  currentStack[currentCourse] = false
  
  return false
}


function canFinish(numCourses, prerequisites) {
  let graph = new Array(numCourses).fill().map(_ => new Array())
  let visited = new Array(numCourses).fill(false)
  let currentStack = new Array(numCourses).fill(false)
  
  for (let [u, v] of prerequisites) {
    graph[v].push(u)
  }
  
  for (let course = 0; course < numCourses; course++) {
    if (isCyclic(course, currentStack, visited, graph)) {
      return false
    }
  }
  
  return true
};