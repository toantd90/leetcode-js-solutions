/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    meetings.sort((m1, m2) => {
        if (m1[0] > m2[0]) {
            return 1;
        } else if (m1[0] < m2[0]) {
            return -1;
        } else if (m1[1] > m2[1]) {
            return 1;
        } else {
            return -1;
        }
    });

    console.log(meetings);

    let noMeetingDays = meetings[0][0] - 1;
    let currentRange = meetings[0];

    for (let i = 1; i < meetings.length; i++) {
        // no overlap
        if (currentRange[1] < meetings[i][0]) {
            noMeetingDays += meetings[i][0] - currentRange[1] - 1;
            currentRange = meetings[i];
        } else {
            // check if overlap then merge
            currentRange = [currentRange[0], Math.max(currentRange[1], meetings[i][1])];
        }
    }

    noMeetingDays += days - currentRange[1];

    return noMeetingDays;
};

