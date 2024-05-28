/**
 * 哈希函数 将key转换为索引值
 * @param key 转换的key
 * @param max 数组的长度（最大数值）
 * @returns 索引值
 */
function hashFn(key: string, max: number): number {
  let hashCode = 0
  const length = key.length
  for(let i = 0; i < length; i++) {
    hashCode = 31 * hashCode + key.charCodeAt(i)
  }
  let index = hashCode % max
  return index
}

console.log(hashFn('abc', 8));
console.log(hashFn('acb', 8));
console.log(hashFn('bca', 8));
console.log(hashFn('cba', 8));


console.log(hashFn('abc', 7));
console.log(hashFn('acb', 7));
console.log(hashFn('bca', 7));
console.log(hashFn('cba', 7));