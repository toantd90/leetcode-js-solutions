/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
function minimumHealth(damage, armor) {
  let health = 0
  let maxDamage = 0
  
  for (let damageAtLevel of damage) {
    health += damageAtLevel
    maxDamage = Math.max(maxDamage, damageAtLevel)
  }
  
  return health - Math.min(maxDamage, armor) + 1
};