const sortedSquares = (A) => {
  return A.map((val) => val * val).sort((a, b) => a - b);
};
