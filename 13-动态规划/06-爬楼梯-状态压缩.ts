function climbStairs(n : number): number {
  let prev = 1
  let curr = 1
  for(let i = 2; i <= n; i++) {
    let newVal = prev + curr
    prev = curr
    curr = newVal
  }
  return curr
}

console.log(climbStairs(3));
console.log(climbStairs(4));

export {}