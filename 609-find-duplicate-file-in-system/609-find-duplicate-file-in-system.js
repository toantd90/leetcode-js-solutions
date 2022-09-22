/**
 * @param {string[]} paths
 * @return {string[][]}
 */
function findDuplicate(paths) {
  let duplicatedContent = {}
  
  for (let pathAndContent of paths) {
    const [path, ...directoriesInfo] = pathAndContent.split(' ')
    
    for (let directoryInfo of directoriesInfo) {
      const indexOfOpenParen = directoryInfo.indexOf('(')
      const file = directoryInfo.substring(0, indexOfOpenParen)
      const fileContent = directoryInfo.substring(indexOfOpenParen + 1, directoryInfo.length - 1)
      
      if (!duplicatedContent[fileContent]) {
        duplicatedContent[fileContent] = []
      }
      
      duplicatedContent[fileContent].push(path + '/' + file)
    }
  }
  
  let duplicatedFilePaths = []
  
  for (let fileContent in duplicatedContent) {
    if (duplicatedContent[fileContent].length > 1) {
      duplicatedFilePaths.push(duplicatedContent[fileContent])
    }
  }
  
  return duplicatedFilePaths
};