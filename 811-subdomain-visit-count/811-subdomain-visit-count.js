/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomainVisits(cpdomains) {
  let subDomainCnt = {}
  for (let cpdomain of cpdomains) {
    const [visitedTimes, domain] = cpdomain.split(' ')
    const subDomains = domain.split('.')
    let subDomain = subDomains[subDomains.length - 1]
    subDomainCnt[subDomain] = (subDomainCnt[subDomain] || 0) + Number(visitedTimes)
    
    for (let i = subDomains.length - 2; i >= 0; i--) {
      subDomain = subDomains[i] + '.' + subDomain
      subDomainCnt[subDomain] = (subDomainCnt[subDomain] || 0) + Number(visitedTimes)
    }
  }
  
  let result = []
  for (let subDomain in subDomainCnt) {
    result.push(subDomainCnt[subDomain] + ' ' +subDomain)
  }
  
  return result
};