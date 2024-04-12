import { ListNode } from './2-add-two-numbers.js';

function* traverse(list: ListNode) {
  let index = 0;
  let ptr = list;
  yield { index: index++, current: ptr };

  while (ptr.next) {
    ptr = ptr.next;
    yield { index: index++, current: ptr };
  }

  return null;
}

const _reverseKGroup = {
  v1(head: ListNode | null, k: number): ListNode | null {
    if (!head) return head;

    let commit = [];
    let list = [];
    for (const { index, current } of traverse(head)) {
      const shouldReverse = (index + 1) % k === 0;
      list.push(current);
      if (shouldReverse) {
        list.reverse();
        commit.push(list);
        list = [];
      }
    }
    commit.push(list);

    let start: ListNode | null = null;
    let prev: ListNode | null = null;
    commit.flat().forEach((node) => {
      if (!prev) {
        start = node;
        prev = node;
        return;
      }

      prev.next = node;
      node.next = null;
      prev = node;
    });

    return start;
  },
};

export const reverseKGroup = Object.entries(_reverseKGroup);
