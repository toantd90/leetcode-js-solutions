/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
    let pairs = 0;
    for (let i = 0; i < hours.length - 1; i++) {
        for (let j = i + 1; j < hours.length; j++) {
            if ((hours[i] + hours[j]) % 24 === 0) {
                pairs++;
            }
        }
    }

    return pairs;
};