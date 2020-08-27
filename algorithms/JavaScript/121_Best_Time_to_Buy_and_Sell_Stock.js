// 愚直二重forループ
const maxProfit = (prices) => {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > max) max = prices[j] - prices[i];
    }
  }
  return max;
};

// O(n) solution
const maxProfit = (prices) => {
  let result = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    result = Math.max(result, prices[i] - min);
  }
  return result;
};
