/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let graph = new Array(numCourses).fill().map((_) => new Array());
  let visited = new Array(numCourses).fill(false);
  let currentStack = new Array(numCourses).fill(false);
  let courses = [];

  for (let [u, v] of prerequisites) {
    graph[v].push(u);
  }

  for (let course = 0; course < numCourses; course++) {
    if (isCyclic(course, currentStack, visited, courses, graph)) {
      return [];
    }
  }

  return courses.reverse();
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function isCyclic(currentCourse, currentStack, visited, courses, graph) {
  if (currentStack[currentCourse]) {
    return true;
  }

  if (visited[currentCourse]) {
    return false;
  }

  currentStack[currentCourse] = true;
  visited[currentCourse] = true;

  let nextCourses = graph[currentCourse];
  for (let course of nextCourses) {
    if (isCyclic(course, currentStack, visited, courses, graph)) {
      return true;
    }
  }
  courses.push(currentCourse);
  currentStack[currentCourse] = false;

  return false;
}
