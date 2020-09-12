const lemonadeChange = (bills) => {
  const casher = { 5: 0, 10: 0 };
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      casher["5"]++;
    } else if (bills[i] === 10) {
      casher["5"]--;
      casher["10"]++;
    } else {
      if (casher["10"] > 0) {
        casher["10"]--;
        casher["5"]--;
      } else {
        casher["5"] -= 3;
      }
    }
    if (casher["5"] < 0 || casher["10"] < 0) return false;
  }
  return true;
};
