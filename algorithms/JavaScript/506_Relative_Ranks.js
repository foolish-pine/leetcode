const findRelativeRanks = (nums) => {
  const obj = {};
  const copy = [...nums].sort((a, b) => b - a);
  for (let i = 0; i < copy.length; i++) {
    if (i === 0) obj[copy[i]] = "Gold Medal";
    else if (i === 1) obj[copy[i]] = "Silver Medal";
    else if (i === 2) obj[copy[i]] = "Bronze Medal";
    else obj[copy[i]] = String(i + 1);
  }
  return nums.map((x) => obj[x]);
};
