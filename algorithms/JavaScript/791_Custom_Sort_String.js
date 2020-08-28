const customSortString = (S, T) => {
  return T.split("")
    .sort((a, b) => S.indexOf(a) - S.indexOf(b))
    .join("");
};
