/**
 * @param {string} queryIP
 * @return {string}
 */
function validIPAddress(queryIP) {
  if (queryIP.indexOf(".") > -1) {
    const nums = queryIP.split(".");
    if (nums.length !== 4) return "Neither";

    for (let i = 0; i < 4; i++) {
      if (
        nums[i].length === 0 ||
        nums[i].length > 3 ||
        Number(nums[i]).toString().length !== nums[i].length ||
        Number(nums[i]) < 0 ||
        Number(nums[i]) > 255
      ) {
        return "Neither";
      }
    }

    return "IPv4";
  }
  if (queryIP.indexOf(":") > -1) {
    const str = queryIP.split(":");
    if (str.length !== 8) return "Neither";

    for (let i = 0; i < 8; i++) {
      if (str[i].length === 0 || str[i].length > 4) {
        return "Neither";
      }

      for (let j = 0; j < str[i].length; j++) {
        if (
          str[i].charCodeAt(j) < 48 ||
          (str[i].charCodeAt(j) > 57 && str[i].charCodeAt(j) < 65) ||
          (str[i].charCodeAt(j) > 70 && str[i].charCodeAt(j) < 97) ||
          str[i].charCodeAt(j) > 102
        )
          return "Neither";
      }
    }

    return "IPv6";
  }

  return "Neither";
}
