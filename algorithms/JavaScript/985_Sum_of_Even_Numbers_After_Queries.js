const sumEvenAfterQueries = (A, queries) => {
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const queryVal = queries[i][0];
    const queryIndex = queries[i][1];

    A.splice(queryIndex, 1, A[queryIndex] + queryVal);
    const evenNums = A.filter((value) => value % 2 === 0);
    if (evenNums.length === 0) {
      result.push(0);
    } else {
      const sum = evenNums.reduce((a, b) => a + b);
      result.push(sum);
    }
  }
  return result;
};
