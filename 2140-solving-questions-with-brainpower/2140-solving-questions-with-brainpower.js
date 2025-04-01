/**
 * @param {number[][]} questions
 * @return {number}
 */
function mostPoints(questions) {
    const n = questions.length;
    let maxPoints = new Array(n).fill(0);

    maxPoints[n - 1] = questions[n - 1][0];

    for (let i = n - 2; i >= 0; i--) {
        const [point, skip] = questions[i];

        maxPoints[i] = Math.max(maxPoints[i + 1], point + (maxPoints[i + skip + 1] || 0));
    }

    return maxPoints[0];
};