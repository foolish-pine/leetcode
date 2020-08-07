const findMaxConsecutiveOnes = (nums) => {
  return nums
    .join("")
    .split("0")
    .sort((a, b) => b.length - a.length)[0].length;
};
