class HashTable<T = any> {
  storage: [string, T][][] =[]
  private length: number = 7
  private count: number = 0

  private hashFunc(key: string, max: number) {
    let hashCode = 0
    const length = key.length
    for(let i = 0; i < length; i++) {
      hashCode = 31 * hashCode + key.charCodeAt(i)
    }
    let index = hashCode % max
    return index
  }

  // 扩容或缩容
  private resize(newLength: number) {
    this.length = newLength

    const newStorage = this.storage
    this.storage = []
    this.count = 0

    newStorage.forEach(bucket => {
      if(!bucket) return
      for(let i = 0; i < bucket.length; i++) {
        this.put(bucket[i][0], bucket[i][1])
      }
    })
  }

  // 添加或更新
  put(key: string, value: T) {
    // 1. 根据key拿到索引值
    const index = this.hashFunc(key, this.length)

    // 2. 取出索引值对应的数组
    let bucket = this.storage[index]
    
    // 3. 判断bucket是否有值
    if(!bucket) {
      bucket = []
      this.storage[index] = bucket
    }

    // 4. 确定有一个数组了，但是是否有对应的key不确定，若有则更新，没有则添加
    let isUpdate = false
    for(let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      let tupleKey = tuple[0]
      if(tupleKey === key) {
        tuple[1] = value
        isUpdate = true
      }
    }
    
    // 5. 没有值则进行添加操作
    if(!isUpdate) {
      bucket.push([key, value])
      this.count++

      const loadNum = this.count / this.length
      if(loadNum > 0.75) {
        this.resize(this.length * 2)
      }
    }
  }

  // 获取方法
  get(key: string): T | undefined {
    const index = this.hashFunc(key, this.length)
    const bucket = this.storage[index]
    if(!bucket) return undefined
    for(let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if(tuple[0] === key) {
        return tuple[1]
      }
    }
  }

  // 删除方法
  delete(key: string): T | undefined {
    const index = this.hashFunc(key, this.length)
    const bucket = this.storage[index]
    if(!bucket) return undefined
    for(let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if(tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--
        // 缩容
        const loadNum = this.count / this.length
        if(loadNum < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2))
        }

        return tuple[1]
      }
    }
  }
}

const hashTable = new HashTable()

hashTable.put('aaa', 100)
hashTable.put('aaa', 110)
hashTable.put('bbb', 200)
hashTable.put('ccc', 300)
hashTable.put('abc', 400)

// console.log(hashTable.get('aaa'));
// console.log(hashTable.get('bbb'));
// console.log(hashTable.get('ccc'));
// console.log(hashTable.get('ddd'));
// console.log(hashTable.get('abc'));


// console.log("delete aaa", hashTable.delete('aaa'));
// console.log("get aaa", hashTable.get('aaa'));
hashTable.put('ddd', 111)
hashTable.put('nba', 222)
hashTable.put('cba', 333)
console.log(hashTable.storage);


hashTable.delete('ddd')
hashTable.delete('nba')
hashTable.delete('cba')
hashTable.delete('abc')
console.log(hashTable.storage);