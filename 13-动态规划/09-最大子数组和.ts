function maxSubArr(arr: number[]): number {
  let n = arr.length
  if(n <= 1) return arr[0]

  // 1. 定义状态
  let dp: number[] = []
  // 2. 初始化状态
  dp[0] = arr[0]
  
  for(let i = 1; i < n; i++) {
    // 3. 定义转移方程
    dp[i] = Math.max(arr[i], arr[i] + dp[i - 1])

  }
  // 4. 计算问题答案
  return Math.max(...dp)
}

console.log(maxSubArr([-2,1,-3,4,-1,2,1,-5,4]));

export {}