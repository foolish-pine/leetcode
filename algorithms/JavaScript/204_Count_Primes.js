const isPrimeNumber = (num) => {
  if (num === 0 || num === 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
};
const countPrimes = (n) => {
  let output = 0;
  if (n === 0 || n === 1) {
    return output;
  } else {
    for (let i = 2; i < n; i++) {
      if (isPrimeNumber(i)) output++;
    }
    return output;
  }
};

// faster solution
const countPrimes = (n) => {
  let array = [];
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (array[i] === undefined) {
      array[i] = 1;
      count++;

      let j = 2;
      while (i * j < n) {
        array[i * j] = 0;
        j++;
      }
    }
  }
  return count;
};
