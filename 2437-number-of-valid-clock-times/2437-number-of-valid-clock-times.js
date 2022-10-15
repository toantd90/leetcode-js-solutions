/**
 * @param {string} time
 * @return {number}
 */
function countTime(time) {
  let choices = 1;

  if (time[4] == '?') {
    choices *= 10;
  }

  if (time[3] == '?') {
    choices *= 6;
  }

  if (time[1] == '?') {
    if (time[0] == '?') {
      choices *= 24;
    } else if (time[0] == '2') {
      choices *= 4;
    } else {
      choices *= 10;
    }
  } else {
    if (time[0] == '?') {
      if (Number(time[1]) > 3) {
        choices *= 2;
      } else {
        choices *= 3;
      }
    }
  }

  return choices;
}
