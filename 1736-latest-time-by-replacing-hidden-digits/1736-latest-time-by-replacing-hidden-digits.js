/**
 * @param {string} time
 * @return {string}
 */
function maximumTime(time) {
  let latestTime = []
  latestTime.push(time[0] !== "?" ? time[0] : time[1] == "?" || time[1] <= "3" ? "2" : "1")
  latestTime.push(time[1] !== "?" ? time[1] : latestTime[0] == "2" ? "3" : "9")
  latestTime.push(':')
    latestTime.push(time[3] = time[3] != "?" ? time[3] : "5")
    latestTime.push(time[4] = time[4] != "?" ? time[4] : "9");
  return latestTime.join('');
}
