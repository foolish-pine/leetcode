const checkRecord = (s) => {
  let A = 0;
  let L = 0;
  for (const record of s.split("")) {
    if (record === "A") {
      A++;
      L = 0;
    } else if (record === "L") {
      L++;
    } else {
      L = 0;
    }
    if (A > 1 || L > 2) return false;
  }
  return true;
};

// one-liner
const checkRecord = (s) => {
  return s.split("A").length <= 2 && s.indexOf("LLL") === -1;
};
