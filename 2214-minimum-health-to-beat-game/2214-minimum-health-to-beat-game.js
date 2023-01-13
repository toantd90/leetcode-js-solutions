/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
function minimumHealth(damage, armor) {
  let safeDamage = 0;
  let health = 0;

  for (let d of damage) {
    safeDamage = Math.max(safeDamage, Math.min(d, armor));
    health += d;
  }

  return health - safeDamage + 1;
}
