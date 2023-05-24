/**
 * @param {string} command
 * @return {string}
 */
function interpret(command) {
  return command.replaceAll("()", "o").replaceAll("(", "").replaceAll(")", "");
}
