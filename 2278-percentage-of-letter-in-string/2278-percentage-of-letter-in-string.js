/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
const percentageLetter = (s, letter) => Math.floor((s.length - s.replaceAll(letter, '').length) * 100 / s.length);