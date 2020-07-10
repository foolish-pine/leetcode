const average = (salary) => {
  return (
    (salary.sort((a, b) => a - b).reduce((a, b) => a + b) -
      (salary[0] + salary[salary.length - 1])) /
    (salary.length - 2)
  );
};
