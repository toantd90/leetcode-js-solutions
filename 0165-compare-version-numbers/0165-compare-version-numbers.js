/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersion(version1, version2) {
    const revisions1 = version1.split('.').map(Number);
    const revisions2 = version2.split('.').map(Number);

    let j = 0;

    for (let i = 0; i < Math.min(revisions1.length, revisions2.length); i++) {
        if (revisions1[i] > revisions2[i]) {
            return 1;
        }

        if (revisions1[i] < revisions2[i]) {
            return -1;
        }
        j = i;
    }

    if (revisions1.length === revisions2.length) {
        return 0;
    }

    for (let i = j + 1; i < Math.max(revisions1.length, revisions2.length); i++) {
        if (revisions1[i] !== undefined && revisions1[i] > 0) {
            return 1;
        }

        if (revisions2[i] !== undefined && revisions2[i] > 0) {
            return -1;
        }
    }


    return 0;
};