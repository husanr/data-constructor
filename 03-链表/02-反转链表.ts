class ListNode {
  value: number
  next: ListNode | null = null

  constructor(value: number) {
    this.value = value
  }
}

// 非递归
// function reverseList(head: ListNode | null): ListNode | null {
//   if(head === null || head.next === null) return head

//   let newHead: ListNode | null = null
//   while(head) {
//     let current: any = head.next
//     head.next = newHead
//     newHead = head
//     head = current
//   }

//   return newHead
// }

// 递归
function reverseList(head: ListNode | null): ListNode | null {
  if(head === null || head.next === null) return head
  const newHead = reverseList(head.next)

  head.next.next = head
  head.next = null

  return newHead
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

let current = reverseList(head)
while(current) {
  console.log(current.value);
  current = current.next
}