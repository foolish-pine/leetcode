const daysBetweenDates = (date1, date2) => {
  return (
    Math.abs(
      new Date(date1.replace(/-/g, "-")).getTime() -
        new Date(date2.replace(/-/g, "-")).getTime()
    ) /
    (24 * 60 * 60 * 1000)
  );
};
