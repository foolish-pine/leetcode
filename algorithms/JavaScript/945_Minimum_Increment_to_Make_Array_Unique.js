const minIncrementForUnique = (A) => {
  let count = 0;
  A = A.sort((a, b) => a - b);
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] >= A[i]) {
      count += A[i - 1] - A[i] + 1;
      A[i] = A[i - 1] + 1;
    }
  }
  return count;
};
