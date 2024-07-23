function climbStairs(n: number): number {
  // 1. 定义状态
  let dp: number[] = []
  // 2. 初始化状态
  dp[0] = 1
  dp[1] = 1
  for(let i = 2; i <= n; i++) {
    // 3. 定义转移方程
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  // 4. 计算问题答案
  return dp[n]
}

console.log(climbStairs(3));
console.log(climbStairs(4));

export {}