const isIsomorphic = (s, t) => {
  const S = {},
    T = {};
  let mutS = "",
    mutT = "";
  for (let i = 0; i < s.length; i++) {
    if (!S[s[i]]) S[s[i]] = i;
    if (!T[t[i]]) T[t[i]] = i;
  }
  for (let i = 0; i < s.length; i++) {
    mutS += S[s[i]];
    mutT += T[t[i]];
  }
  return mutS === mutT;
};

// another solution
const isIsomorphic = (s, t) => {
  const S = {},
    T = {};
  for (let i = 0; i < s.length; i++) {
    const sLetter = s[i];
    const tLetter = t[i];
    if (!S[sLetter]) S[sLetter] = tLetter;
    if (!T[tLetter]) T[tLetter] = sLetter;
    if (S[sLetter] !== tLetter || T[tLetter] !== sLetter) return false;
  }
  return true;
};
