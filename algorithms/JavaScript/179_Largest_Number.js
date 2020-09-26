const largestNumber = (nums) => {
  if (nums.length === 1) return String(nums[0]);
  nums = nums.sort((a, b) => {
    for (let i = 0; i < Math.min(String(a).length, String(b).length); i++) {
      if (String(b)[i] - String(a)[i] > 0) {
        return 1;
      } else if (String(b)[i] - String(a)[i] < 0) {
        return -1;
      } else {
        if (String(a) + String(b) < String(b) + String(a)) {
          return 1;
        } else {
          return -1;
        }
      }
    }
  });
  let result = nums.reduce((a, b) => String(a) + String(b));
  if (result[0] === "0") {
    return "0";
  } else {
    return result;
  }
};

// more simple solution
const largestNumber = (nums) => {
  return (
    nums
      .sort((a, b) => {
        return b + "" + a - (a + "" + b);
      })
      .join("")
      .replace(/^0*/, "") || "0"
  );
};
