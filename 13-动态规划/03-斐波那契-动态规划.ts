/**
 * 动态规划
 * 1. 定义状态
 * 2. 确定转移方程(一般都在循环中for/while)
 * 3. 初始化值
 * 4. 计算问题的答案
 * 
 */

function fib(n: number): number {
  let dp: number[] = [] // 1. 定义状态
  dp[0] = 0 // 3. 初始化值
  dp[1] = 1

  for(let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]  // 2. 确定转移方程
  }
  return dp[n] // 4. 计算问题的答案
}

// console.log(fib(10));
console.log(fib(50));

export {}