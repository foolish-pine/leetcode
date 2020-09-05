const partitionLabels = (S) => {
  const result = [];
  let lastIndex = 0;

  let i = 0;
  while (S.length > 0) {
    lastIndex = Math.max(lastIndex, S.lastIndexOf(S[i]));
    if (lastIndex === i) {
      result.push(lastIndex + 1);
      S = S.slice(lastIndex + 1);
      i = 0;
      lastIndex = 0;
      continue;
    }
    i++;
  }

  return result;
};
