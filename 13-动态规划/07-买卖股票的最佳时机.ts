function maxProfit(prices: number[]): number {
  const n = prices.length
  if(n <= 1) return 0
  // 1. 定义状态
  let dp: number[] = []
  // 2. 初始化
  dp[0] = 0
  let minPrice = prices[0]
  for(let i = 1; i < n; i++) {
    // 3. 定义转移方程
    dp[i] = Math.max(prices[i] - minPrice, dp[i - 1])
    minPrice = Math.min(prices[i], minPrice)
  }
  // 4. 计算题目答案
  return dp[n - 1]
}

console.log(maxProfit([7, 1, 5, 6, 2, 4]));

export {}