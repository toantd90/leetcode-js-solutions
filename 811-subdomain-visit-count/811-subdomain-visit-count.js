/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomainVisits(cpdomains) {
  let subdomainVisit = {}
  
  for (let cpdomain of cpdomains) {
    const spaceIndex = cpdomain.indexOf(' ')
    const count = Number(cpdomain.substring(0, spaceIndex))
    const domain = cpdomain.substring(spaceIndex + 1)
    const seperatedDomains = domain.split('.')
    let currentSubdomain = ''
    
    for (let i = seperatedDomains.length - 1; i >= 0; i--) {
      currentSubdomain = seperatedDomains[i] + (currentSubdomain ? ('.' + currentSubdomain) : currentSubdomain)
      
      subdomainVisit[currentSubdomain] = (subdomainVisit[currentSubdomain] || 0) + count
    }
  }
  
  let ans = []

  for (let subdomain in subdomainVisit) {
    ans.push(subdomainVisit[subdomain] + ' ' + subdomain)
  }
  
  return ans
};