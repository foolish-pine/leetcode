const generate = (numRows) => {
  if (numRows === 0) return [];
  const result = [];
  for (let i = 0; i < numRows; i++) {
    const currRow = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currRow.push(1);
      } else {
        currRow.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(currRow);
  }
  return result;
};
