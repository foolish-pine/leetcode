const sumSubarrayMins = (A) => {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    let min = A[i];
    sum += min;
    for (let j = i + 1; j < A.length; j++) {
      if (min > A[j]) min = A[j];
      sum += min;
    }
  }
  return sum >= 1000000007 ? sum % 1000000007 : sum;
};
