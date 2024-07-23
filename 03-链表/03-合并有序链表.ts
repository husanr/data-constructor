class ListNode {
  val: number
  next: ListNode | null = null

  constructor(val: number) {
    this.val = val
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
  let dummy = new ListNode(0); // 创建哨兵节点，便于操作
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next!;
    } else {
      current.next = l2;
      l2 = l2.next || null;
    }
    current = current.next;
  }

  // 合并剩余的节点
  current.next = (l1 !== null) ? l1 : l2;

  return dummy.next; // 返回合并后的链表的头节点
}

const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)

const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(5)
console.log(mergeTwoLists(l1, l2));

export {}