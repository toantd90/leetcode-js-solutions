function imageSmoother(img) {
  const rows = img.length;
  const cols = img[0].length;

  const res = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let sum = 0;
      let count = 0;

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const ni = i + dx;
          const nj = j + dy;

          if (
            ni >= 0 &&
            ni < rows &&
            nj >= 0 &&
            nj < cols
          ) {
            sum += img[ni][nj];
            count++;
          }
        }
      }

      res[i][j] = Math.floor(sum / count);
    }
  }

  return res;
}