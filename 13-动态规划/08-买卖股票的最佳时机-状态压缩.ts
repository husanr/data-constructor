function maxProfit(prices: number[]): number {
  let n = prices.length
  if(n <= 1) return 0
  // 1. 定义状态 2.初始化状态
  let maxValue = 0
  let minValue = prices[0]
  for(let i = 1; i < n; i++) {
    // 3. 定义转移方程
    maxValue = Math.max(prices[i] - minValue, maxValue)
    minValue = Math.min(prices[i], minValue)
  }
  // 4. 计算问题答案
  return maxValue
}

console.log(maxProfit([7, 1, 5, 4, 6, 2]));
export {}