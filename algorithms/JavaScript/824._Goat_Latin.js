const toGoatLatin = (S) => {
  const arr = S.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (/^[aeiouAEIOU]/.test(arr[i])) {
      arr[i] = arr[i] + "ma";
    } else {
      arr[i] = arr[i].slice(1) + arr[i][0] + "ma";
    }
    const tail = "a".repeat(i + 1);
    arr[i] += tail;
  }
  return arr.join(" ");
};

// one-linear
const toGoatLatin = (S) => {
  return S.split(" ")
    .map((word) => {
      if (/^[aeiouAEIOU]/.test(word)) {
        return word + "ma";
      } else {
        return word.slice(1) + word[0] + "ma";
      }
    })
    .map((word, i) => word + "a".repeat(i + 1))
    .join(" ");
};
