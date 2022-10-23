function convertToMinutes(time) {
  const [hour, minute] = time.split(':').map(Number)
  
  return hour * 60 + minute
}



/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
function haveConflict(event1, event2) {
  const [startTime1, endTime1] = event1.map(time => convertToMinutes(time))
  const [startTime2, endTime2] = event2.map(time => convertToMinutes(time))
  
  return (startTime2 <= endTime1 && startTime1 <= endTime2) || (startTime1 <= endTime2 && startTime2 <= endTime1)
};