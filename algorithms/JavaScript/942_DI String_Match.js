const diStringMatch = (S) => {
  const A = [];
  let min = 0;
  let max = S.length;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "I") {
      A.push(min);
      min++;
    } else {
      A.push(max);
      max--;
    }
  }
  A.push(min);
  return A;
};
