const countOdds = (low, high) => {
  if (low % 2 !== 0 && high % 2 !== 0) {
    return Math.floor((high - low + 1) / 2) + 1;
  } else if (low % 2 === 0 && high % 2 === 0) {
    return Math.floor((high - low + 1) / 2);
  } else {
    return (high - low + 1) / 2;
  }
};
