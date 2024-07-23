function maxSubArr(arr: number[]): number {
  let n = arr.length
  if(n <= 1) return arr[0]

  // 1. 定义状态
  // 2. 初始化状态
  let preValue = arr[0]
  let maxValue = preValue
  for(let i = 1; i < n; i++) {
    // 3. 定义转移方程
    preValue = Math.max(arr[i], arr[i] + preValue)
    maxValue = Math.max(preValue, maxValue)
  }
  // 4. 计算问题答案
  return maxValue
}

console.log(maxSubArr([-2,1,-3,4,-1,2,1,-5,4]));

export {}