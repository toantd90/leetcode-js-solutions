function dfs(email, mergedEmails, visitedEmails, adjacencyList) {
  if (visitedEmails.has(email)) {
    return;
  }
  
  visitedEmails.add(email)
  mergedEmails.push(email)
  
  for (let nextEmail of adjacencyList[email]) {
    dfs(nextEmail, mergedEmails, visitedEmails, adjacencyList)
  }
}


/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
  let adjacencyList = {}
  
  for (let [_, ...emails] of accounts) {
    const firstEmail = emails[0]
    
    if (!adjacencyList[firstEmail]) {
      adjacencyList[firstEmail] = []
    }
    
    for (let i = 1; i < emails.length; i++) {
      const nextEmail = emails[i]
      adjacencyList[firstEmail].push(nextEmail)
      
      if (!adjacencyList[nextEmail]) {
        adjacencyList[nextEmail] = []
      }
      
      adjacencyList[nextEmail].push(firstEmail)
    }
  }
  
  let visitedEmails = new Set();
  let mergedAccounts = []
  
  for (let [name, ...emails] of accounts) {
    const firstEmail = emails[0]
    let mergedEmails = []
    
    if (!visitedEmails.has(firstEmail)) {
      dfs(firstEmail, mergedEmails, visitedEmails, adjacencyList)
      mergedEmails.sort()
      mergedAccounts.push([name, ...mergedEmails])
    }
  }
  
  return mergedAccounts
};