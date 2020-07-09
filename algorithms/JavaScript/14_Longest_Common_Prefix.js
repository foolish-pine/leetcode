const longestCommonPrefix = (strs) => {
  let prefix = "";
  if (strs.length !== 0)
    for (let i = 0; i < strs[0].length; i++) {
      if (strs.every((word) => word[i] === strs[0][i])) {
        prefix += strs[0][i];
      } else {
        return prefix;
      }
    }
  return prefix;
};
