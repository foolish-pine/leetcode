const reverseOnlyLetters = (S) => {
  const arr = S.split("");
  const reverse = [];
  for (let i = 0; i < arr.length; i++) {
    if (/[A-Za-z]/.test(arr[i])) {
      reverse.unshift(arr[i]);
      arr[i] = undefined;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      arr[i] = reverse[0];
      reverse.shift();
    }
  }
  return arr.join("");
};
