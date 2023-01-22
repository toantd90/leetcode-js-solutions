function scoreSortFunc(studentScore1, studentScore2) {
  if (studentScore1[1] > studentScore2[1]) {
    return -1;
  } else {
    return 1;
  }
}

/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
function sortTheStudents(score, k) {
  const students = score.length;
  const exams = score[0].length;

  const kExams = [];

  for (let student = 0; student < students; student++) {
    kExams.push([student, score[student][k]]);
  }

  kExams.sort(scoreSortFunc);

  let sortedScore = [];
  for (let i = 0; i < students; i++) {
    sortedScore.push(score[kExams[i][0]]);
  }

  return sortedScore;
}
