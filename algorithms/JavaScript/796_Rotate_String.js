const rotateString = (A, B) => {
  let str = A;
  if (A === B) return true;
  for (let i = 0; i < A.length - 1; i++) {
    str = A.slice(i + 1) + A.slice(0, i + 1);
    if (str === B) return true;
  }
  return false;
};

// smart one-linear
const rotateString = (A, B) => {
  return (B + B).indexOf(A) !== -1 && A.length == B.length;
};
