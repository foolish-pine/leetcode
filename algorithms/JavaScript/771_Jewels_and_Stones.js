const numJewelsInStones = (J, S) => {
  const splitedJ = J.split("");
  const splitedS = S.split("");
  let jewelsNum = 0;

  splitedS.forEach((value) => {
    if (splitedJ.includes(value)) jewelsNum++;
  });

  return jewelsNum;
};
