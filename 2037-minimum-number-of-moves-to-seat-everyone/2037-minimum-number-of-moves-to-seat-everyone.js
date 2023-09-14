/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
function minMovesToSeat(seats, students) {
  seats.sort((s1, s2) => s1 - s2);
  students.sort((s1, s2) => s1 - s2);

  let moves = 0;
  for (let i = 0; i < seats.length; i++) {
    moves += Math.abs(seats[i] - students[i]);
  }

  return moves;
}
