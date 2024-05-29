function isPrime(num: number): boolean {
  // for(let i = 2; i < num; i++) {
  //   if(num % i === 0) {
  //     return false
  //   }
  // }
  const sqrt = Math.sqrt(num)
  for(let i = 2; i <= sqrt; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(4));
console.log(isPrime(8));
console.log(isPrime(10));

console.log(isPrime(11));
console.log(isPrime(13));

export {}