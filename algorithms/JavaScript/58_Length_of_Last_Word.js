const lengthOfLastWord = (s) => {
  return s.trim().split(" ")[s.trim().split(" ").length - 1].length;
};
