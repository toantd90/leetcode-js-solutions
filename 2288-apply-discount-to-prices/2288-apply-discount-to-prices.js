/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
    let ans = ''
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i - 1] === '$') {
            let price = ''
            while (i < sentence.length && sentence[i] !== ' ') {
                price += sentence[i]
                i++
            }
            
            if (price && !isNaN(price)) {
                ans += (Number(price) * (1 - discount / 100)).toFixed(2)
            } else {
                ans += price
            }
            
            if (i < sentence.length)
                ans += ' '
            
        } else {
            ans += sentence[i]
        }
    }
    
    return ans
};

