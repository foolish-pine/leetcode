const dayOfYear = (date) => {
  const year = new Date(date).getFullYear();
  const newYearDay = new Date(`${year}-01-01`);
  const diff =
    (new Date(date).getTime() - newYearDay.getTime()) / (24 * 60 * 60 * 1000) +
    1;
  return diff;
};

// one-liner
const dayOfYear = (date) => {
  return (new Date(date) - new Date(date.slice(0, 4)) + 86400000) / 86400000;
};
