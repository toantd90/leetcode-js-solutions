let codeDb = new Map(), urlDb = new Map()
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const BASE_URL = 'http://tinyurl.com/'


const getCode = () => {
    return new Array(6).fill().map(_ => chars.charAt(~~(Math.random() * 62))).join('')
}


/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = longUrl => {
    let code = getCode()
    
    while (codeDb.has(code)) code = getCode()
    codeDb.set(code, longUrl)
    
    const shortUrl = BASE_URL + code
    urlDb.set(shortUrl, longUrl)
    
    return shortUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = shortUrl => urlDb.get(shortUrl)

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */