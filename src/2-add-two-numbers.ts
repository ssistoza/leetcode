export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static construct(list: number[]) {
    const [first, ...rest] = list;
    let listNode = new ListNode(first);
    let index = listNode;
    rest.forEach((val) => {
      index.next = new ListNode(val);
      index = index.next;
    });

    return listNode;
  }
}

function* iterateListNodes(list: ListNode) {
  yield list.val;
  let node = list;
  let hasNext = Boolean(list.next);
  while (hasNext) {
    // @ts-ignore
    node = node.next;
    hasNext = Boolean(node.next);
    yield node.val;
  }
}

const _addTwoNumbers = {
  v1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const l1Iterator = iterateListNodes(l1!);
    const l2Iterator = iterateListNodes(l2!);

    const start = new ListNode(0);
    let current = start;
    let carry = 0;
    for (const l1Val of l1Iterator) {
      const itr2 = l2Iterator.next();
      const l2Val = itr2.done ? 0 : itr2.value;
      const sum = l1Val + l2Val + carry;

      carry = sum > 9 ? 1 : 0;
      current.next = new ListNode(carry === 1 ? sum - 10 : sum);
      current = current.next;
    }

    for (const l2Val of l2Iterator) {
      const sum = l2Val + carry;
      carry = sum > 9 ? 1 : 0;
      current.next = new ListNode(carry === 1 ? sum - 10 : sum);
      current = current.next;
    }

    if (carry) current.next = new ListNode(1);
    return start.next;
  },
};

export const addTwoNumbers = Object.entries(_addTwoNumbers);
