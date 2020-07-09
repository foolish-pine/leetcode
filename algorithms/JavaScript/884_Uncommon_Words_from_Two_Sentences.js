const uncommonFromSentences = (A, B) => {
  const obj = {};
  const words = [...A.split(" "), ...B.split(" ")];
  for (let i = 0; i < words.length; i++) {
    if (!obj.hasOwnProperty(words[i])) {
      obj[words[i]] = 1;
    } else {
      obj[words[i]]++;
    }
  }
  return words.filter((word) => obj[word] === 1);
};
