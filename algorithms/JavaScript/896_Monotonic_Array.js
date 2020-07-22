const isMonotonic = (A) => {
  if (A.length < 2) return true;
  if (A[0] > A[A.length - 1]) A.reverse();
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i + 1] - A[i] < 0) return false;
  }
  return true;
};
