const busyStudent = (startTime, endTime, queryTime) => {
  let result = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) result++;
  }
  return result;
};
