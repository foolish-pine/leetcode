const fib = (N) => {
  if (N === 0) {
    return 0;
  } else if (N === 1) {
    return 1;
  } else {
    return fib(N - 2) + fib(N - 1);
  }
};
