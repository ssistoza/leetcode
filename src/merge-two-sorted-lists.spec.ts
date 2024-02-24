import { describe, expect, test } from 'vitest';
import { ListNode, mergeTwoLists } from './merge-two-sorted-lists.js';

describe.each(mergeTwoLists)('mergeTwoLists %s', (_, fn) => {
  test('[1,2,4], [1,3,4]', () => {
    expect(
      fn(ListNode.construct([1, 2, 4]), ListNode.construct([1, 3, 4]))
    ).toEqual(ListNode.construct([1, 1, 2, 3, 4, 4]));
  });

  test('[], [0]', () => {
    expect(fn(ListNode.construct([]), ListNode.construct([0]))).toEqual(
      ListNode.construct([0])
    );
  });
});
