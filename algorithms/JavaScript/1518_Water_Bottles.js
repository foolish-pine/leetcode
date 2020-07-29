const numWaterBottles = (numBottles, numExchange) => {
  let drink = numBottles;
  let empty = numBottles;
  while (empty >= numExchange) {
    drink += Math.floor(empty / numExchange);
    empty = Math.floor(empty / numExchange) + (empty % numExchange);
  }
  return drink;
};
