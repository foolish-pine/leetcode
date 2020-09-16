const addToArrayForm = (A, K) => {
  A = A.reverse();
  K = String(K)
    .split("")
    .reverse()
    .map((num) => Number(num));
  for (let i = 0; i < K.length; i++) {
    if (A[i] + K[i] >= 10) {
      A[i] = Number(String(A[i] + K[i])[1]);
      let j = i + 1;
      while (A[j] + 1 === 10 && j < A.length) {
        A[j] = 0;
        j++;
      }
      if (j !== A.length) {
        A[j]++;
      } else {
        A.push(1);
      }
    } else {
      if (i > A.length - 1) {
        A.push(K[i]);
      } else {
        A[i] = A[i] + K[i];
      }
    }
  }
  return A.reverse();
};

// smarter solution
const addToArrayForm = (A, K) => {
  let flag = A.length - 1;
  while (K) {
    if (flag < 0) {
      A.unshift(K % 10);
    } else {
      K += A[flag];
      A[flag--] = K % 10;
    }
    K = Math.floor(K / 10);
  }
  return A;
};
