import ArrayQueue from "./01_队列结构";

// 击鼓传花
function jgch(queue: ArrayQueue<string>, num: number) {
  while(queue.size > 1) {
    for(let i = 1; i < num; i++) {
      const item = queue.dequeue()
      if(item) queue.enqueue(item)
    }
    queue.dequeue()
  }
  return queue.dequeue()
}

const queue = new ArrayQueue<string>()
queue.enqueue('why')
queue.enqueue('james')
queue.enqueue('cobe')
queue.enqueue('curry')

console.log(jgch(queue, 3));

// 约瑟夫环
function lastRemaining(n: number, m: number) {
  const queue = new ArrayQueue<number>()
  for(let i = 0; i < 10; i++) {
    queue.enqueue(i)
  }

  while(queue.size > 1) {
    for(let i = 1; i < m; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }
  return queue.dequeue()
}

console.log(lastRemaining(5, 3));
console.log(lastRemaining(10, 17));