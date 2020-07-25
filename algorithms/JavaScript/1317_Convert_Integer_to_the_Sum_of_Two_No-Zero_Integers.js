const getNoZeroIntegers = (n) => {
  for (let i = 1; i < n; i++) {
    if (
      i.toString().indexOf("0") === -1 &&
      (n - i).toString().indexOf("0") === -1
    )
      return [i, n - i];
  }
};
