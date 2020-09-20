const sequentialDigits = (low, high) => {
  const result = [];
  let digitsNum = String(low).length;
  let seqNum = 0;
  let plusNum = 0;

  for (let i = 1; i <= digitsNum; i++) {
    seqNum += 10 ** (digitsNum - i) * i;
    plusNum += 10 ** (digitsNum - i);
  }

  while (seqNum < low) {
    seqNum += plusNum;
    if (String(seqNum).split("")[String(seqNum).length - 1] === "0") {
      seqNum = 0;
      plusNum = 0;
      digitsNum++;
      for (let i = 1; i <= digitsNum; i++) {
        seqNum += 10 ** (digitsNum - i) * i;
        plusNum += 10 ** (digitsNum - i);
      }
    }
  }

  while (seqNum < high) {
    result.push(seqNum);
    seqNum += plusNum;

    if (String(seqNum).split("")[String(seqNum).length - 1] === "0") {
      seqNum = 0;
      plusNum = 0;
      digitsNum++;
      for (let i = 1; i <= digitsNum; i++) {
        seqNum += 10 ** (digitsNum - i) * i;
        plusNum += 10 ** (digitsNum - i);
      }
    }
  }

  return result;
};

// another solution
const sequentialDigits = (low, high) => {
  const ans = [];
  for (let i = 1; i <= 9; i++) {
    let num = i,
      j = i + 1;
    while (num <= high && j <= 9) {
      num *= 10;
      num += j;
      if (num > high) break;
      else if (num >= low) ans.push(num);
      j++;
    }
  }
  return ans.sort((a, b) => a - b);
};
