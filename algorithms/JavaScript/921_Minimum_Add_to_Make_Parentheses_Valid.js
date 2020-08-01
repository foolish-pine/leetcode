const minAddToMakeValid = (S) => {
  while (S.includes("()")) {
    S = S.replace("()", "");
  }
  return S.length;
};
