const reformatDate = (date) => {
  const day = String(date.split(" ")[0].replace(/[a-z]/g, "")).padStart(2, "0");
  const monthSet = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = String(monthSet.indexOf(date.split(" ")[1]) + 1).padStart(
    2,
    "0"
  );
  const year = date.split(" ")[2];

  return `${year}-${month}-${day}`;
};
