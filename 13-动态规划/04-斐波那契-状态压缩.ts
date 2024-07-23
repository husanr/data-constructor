function fib(n: number): number {
  if(n <= 1) return n
  // 1. 定义状态
  // 2. 初始化状态
  let prev = 0
  let cur = 1
  for(let i = 2; i <= n; i++) {
    // 3. 定义转移方程
    let newVal = cur + prev
    prev = cur
    cur = newVal
  }
  // 4. 计算问题的答案
  return cur
}
// 只需要定义两个变量，而不需要定义一个数组即可求解
console.log(fib(10));
console.log(fib(50));