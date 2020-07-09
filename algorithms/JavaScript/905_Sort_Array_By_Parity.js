const sortArrayByParity = (A) => {
  return [
    ...A.filter((value) => value % 2 === 0),
    ...A.filter((value) => value % 2 !== 0),
  ];
};
