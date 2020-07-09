const reformat = (s) => {
  let alphabets = [];
  let nums = [];
  let reformattedS = "";
  for (let i = 0; i < s.length; i++) {
    isFinite(s[i]) ? nums.push(s[i]) : alphabets.push(s[i]);
  }

  if (alphabets.length === nums.length) {
    for (let i = 0; i < alphabets.length; i++) {
      reformattedS += alphabets[i];
      reformattedS += nums[i];
    }
    return reformattedS;
  } else if (alphabets.length - nums.length === 1) {
    for (let i = 0; i < alphabets.length - 1; i++) {
      reformattedS += alphabets[i];
      reformattedS += nums[i];
    }
    reformattedS += alphabets[alphabets.length - 1];
    return reformattedS;
  } else if (alphabets.length - nums.length === -1) {
    for (let i = 0; i < nums.length - 1; i++) {
      reformattedS += nums[i];
      reformattedS += alphabets[i];
    }
    reformattedS += nums[nums.length - 1];
    return reformattedS;
  } else {
    return "";
  }
};
