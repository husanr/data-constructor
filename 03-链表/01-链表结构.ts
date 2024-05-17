
class Node<T> {
  value: T 
  next: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}


class LinkList<T> {
  head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  private getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while(index++ < position && current) {
      current = current.next
    }
    return current
  }

  // 添加节点
  append(value: T) {
    const node = new Node(value)
    if(this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }

  // 遍历节点
  traverse() {
    const values: T[] = []
    let current = this.head
    while(current) {
      values.push(current.value)
      current = current.next
    }
    console.log(values.join('->'));
  }
  // 插入节点
  insert(value: T, position: number) {
    if(position < 0 || position >= this.size) return false
    const node = new Node(value)
    if(position === 0) {
      node.next = this.head
      this.head = node
    } else {
      // let current = this.head
      // let previous: Node<T> | null = null
      // let index = 0
      // while(index++ < position && current) {
      //   previous = current
      //   current = current.next
      // }
      // node.next = current
      // previous!.next = node
      
      // 重构
      let previous = this.getNode(position - 1)
      node.next = previous?.next ?? null
      previous!.next = node
    }
    this.size++

    return true
  }

  // 删除节点
  removeAt(position: number): T | null {
    if(position < 0 || position >= this.size) return null

    let current = this.head
    if(position === 0) {
      this.head = current?.next ?? null
    } else {
      // let previous: Node<T> | null = null
      // let index = 0
      // while(index++ < position && current) {
      //   previous = current
      //   current = current.next
      // }
      // previous!.next = current?.next ?? null

      // 重构
      let previous = this.getNode(position - 1)
      previous!.next = previous?.next?.next ?? null
    }
    this.size--
    return current?.value ?? null
  }

  // 获取节点
  get(position: number): T | null {
    if(position < 0 || position >= this.size) return null

    // let index = 0
    // let current = this.head
    // while(index++ < position && current) {
    //   current = current.next
    // }
    // return current?.value ?? null

    // 重构
    return this.getNode(position)?.value ?? null
  }

  // 更新节点
  update(value: T, position: number): boolean {
    if(position < 0 || position >= this.size) return false
    let current = this.getNode(position)
    current!.value = value
    return true
  }

  // 查找索引
  indexOf(value: T): number {
    let index = 0
    let current = this.head
    while(current) {
      if(current.value === value) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  // isEmpty
  isEmpty(): boolean {
    return this.size === 0
  }

  // 根据值移除
  remove(value: T): T | null {
    return this.removeAt(this.indexOf(value))
  }
}

const link = new LinkList<string>()
link.append('aaa')
link.append('bbb')
link.append('ccc')
link.append('ddd')

console.log("------ 测试insert ------");
link.traverse()
link.insert('abc', 0)
link.traverse()
link.insert('bcd', 2)
link.traverse()

console.log("------ 测试removeAt ------");
link.removeAt(0)
link.removeAt(0)
link.traverse()
link.removeAt(3)
console.log(link.removeAt(1));
link.traverse()

console.log("------ 测试get ------");
console.log(link.get(0));
console.log(link.get(1));
console.log(link.get(2));

console.log("------ 测试update ------");
link.update('why', 1)
link.update('kobe', 2)
link.traverse()

console.log("------ 测试indexOf ------");
console.log(link.indexOf('why'));
console.log(link.indexOf('kobe'));

console.log("------ 测试remove ------");
link.remove('why')
link.remove('bcd')
console.log(link.isEmpty());

export {}