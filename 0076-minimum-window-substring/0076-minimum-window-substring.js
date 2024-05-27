function minWindow(s, t) {
  const map = new Array(128).fill(0);
  for (const c of t) {
    map[c.charCodeAt(0)]++;
  }
  let counter = t.length;
  let begin = 0;
  let end = 0;
  let d = Number.MAX_SAFE_INTEGER;
  let head = 0;

  while (end < s.length) {
    if (map[s.charCodeAt(end++)]-- > 0) {
      counter--;
    }

    while (counter === 0) {
      if (end - begin < d) {
        d = end - (head = begin);
      }
      if (map[s.charCodeAt(begin++)]++ === 0) {
        counter++;
      }
    }
  }

  return d === Number.MAX_SAFE_INTEGER ? '' : s.substr(head, d);
}