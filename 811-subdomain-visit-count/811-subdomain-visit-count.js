/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomainVisits(cpdomains) {
  let domainCount = {}
  
  for (let cpdomain of cpdomains) {
    const [count, fullDomain] = cpdomain.split(' ')
    
    const domains = fullDomain.split('.')
    let curDomain = domains[domains.length - 1]
    domainCount[curDomain] = (domainCount[curDomain] || 0) + Number(count)
    
    for (let i = domains.length - 2; i >= 0; i--) {
      curDomain = domains[i] + '.' + curDomain
      domainCount[curDomain] = (domainCount[curDomain] || 0) + Number(count)
    }
  }
  
  let subDomainArray = []
  for (let domain in domainCount) {
    subDomainArray.push(domainCount[domain] + ' ' + domain)
  }
  
  return subDomainArray
};