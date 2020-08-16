const backspaceCompare = (S, T) => {
  let s = "";
  let t = "";
  for (let i = 0; i < S.length; i++) {
    s += S[i];
    if (S[i] === "#") s = s.slice(0, -2);
  }
  for (let i = 0; i < T.length; i++) {
    t += T[i];
    if (T[i] === "#") t = t.slice(0, -2);
  }
  return s === t;
};
