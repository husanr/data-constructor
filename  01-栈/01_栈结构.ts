import IStack from './interface/IStack'

class ArrayStack<T> implements IStack<T>{
  private data: T[] = []

  // 入栈
  push(element: T) {
    this.data.push(element)
  }

  // 出栈
  pop(): T | undefined {
    return this.data.pop()
  }

  // 查看栈顶元素
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  // 是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 长度
  get size(): number {
    return this.data.length
  }

}

class LinkedStack<T> implements IStack<T> {
  push(element: T): void {
    throw new Error('Method not implemented.')
  }
  pop(): T | undefined {
    throw new Error('Method not implemented.')
  }
  peek(): T | undefined {
    throw new Error('Method not implemented.')
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.')
  }
  get size(): number {
    throw new Error('Method not implemented.')
  }
  
}


const stack1 = new ArrayStack<string>()
stack1.push('aaa')
stack1.push('bbb')
stack1.push('ccc')
// stack1.push(123)

console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.isEmpty());
console.log(stack1.size);

const stack2 = new ArrayStack<number>()
stack2.push(123)

export default ArrayStack