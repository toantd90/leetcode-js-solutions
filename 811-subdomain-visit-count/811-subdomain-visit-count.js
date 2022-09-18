/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomainVisits(cpdomains) {
  let subdomainVisit = {}
  
  for (let cpdomain of cpdomains) {
    // ['9001', 'discuss.leetcode.com']
    const [strCount, domain] = cpdomain.split(' ')
    // strCount = '9001'
    // domain = 'dicuss.leetcode.com'
    const count = Number(strCount)
    // count = 9001 
    const seperatedDomains = domain.split('.')
    let currentSubdomain = ''
    
    for (let i = seperatedDomains.length - 1; i >= 0; i--) {
      currentSubdomain = seperatedDomains[i] + (currentSubdomain ? ('.' + currentSubdomain) : currentSubdomain)
      
      subdomainVisit[currentSubdomain] = (subdomainVisit[currentSubdomain] || 0) + count
    }
  }
  
  let ans = []

  for (let subdomain in subdomainVisit) {
    // subdomain leetcode.com    
    // subdomainVisit[subdomain] 9001
    ans.push(subdomainVisit[subdomain] + ' ' + subdomain)
  }
  
  return ans
};