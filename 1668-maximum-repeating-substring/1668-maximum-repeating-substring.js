/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = (s, w) => {
	let result = 0;

	while (s.includes(w.repeat(result + 1))) {
		result += 1;
	};
  
	return result;
};