/*
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static construct(list: number[]) {
    const [first, ...rest] = list;

    const start = new ListNode(first);
    let _next = start;
    rest.forEach((val) => {
      _next.next = new ListNode(val);
      _next = _next.next;
    });

    return start;
  }
}

const _mergeTwoLists = {
  v1(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    let list: ListNode | null = null;

    if (list1.val <= list2.val) {
      list = list1;
      list.next = _mergeTwoLists.v1(list1.next, list2);
    } else {
      list = list2;
      list.next = _mergeTwoLists.v1(list1, list2.next);
    }

    return list;
  },
};

export const mergeTwoLists = Object.entries(_mergeTwoLists);
