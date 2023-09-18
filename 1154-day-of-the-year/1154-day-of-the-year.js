/**
 * @param {string} date
 * @return {number}
 */
function dayOfYear(date) {
  const [year, month, day] = date.split("-").map(Number);
  const isLeap = new Date(year, 1, 29).getMonth() == 1;
  const numOfDaysFromBeginbing = [
    0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334,
  ];

  return (
    numOfDaysFromBeginbing[month - 1] + (month > 2 && isLeap ? 1 : 0) + day
  );
}
