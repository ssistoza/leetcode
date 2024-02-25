import { describe, expect } from 'vitest';
import { ListNode, mergeTwoLists } from './21-merge-two-sorted-lists.js';
import { test } from '~lib/vitest.js';

describe.each(mergeTwoLists)('21. mergeTwoLists %s', (_, fn) => {
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
