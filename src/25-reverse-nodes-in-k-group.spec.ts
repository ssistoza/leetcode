import { describe, expect } from 'vitest';
import { test } from '~lib/vitest.js';
import { ListNode } from './2-add-two-numbers.js';
import { reverseKGroup } from './25-reverse-nodes-in-k-group.js';

describe.each(reverseKGroup)('25. Reverse Nodes in k-Group %s', (_, fn) => {
  test('head = [1,2,3,4,5], k = 2', () => {
    expect(fn(ListNode.construct([1, 2, 3, 4, 5]), 2)).toEqual(
      ListNode.construct([2, 1, 4, 3, 5])
    );
  });

  test('head = [1,2,3,4,5], k = 3', () => {
    expect(fn(ListNode.construct([1, 2, 3, 4, 5]), 3)).toEqual(
      ListNode.construct([3, 2, 1, 4, 5])
    );
  });

  test('head = [1,2,3,4,5], k = 4', () => {
    expect(fn(ListNode.construct([1, 2, 3, 4, 5]), 4)).toEqual(
      ListNode.construct([4, 3, 2, 1, 5])
    );
  });

  test('head = [1,7,3,2,7,0,1,0,0], k = 4', () => {
    expect(fn(ListNode.construct([1, 7, 3, 2, 7, 0, 1, 0, 0]), 4)).toEqual(
      ListNode.construct([2, 3, 7, 1, 0, 1, 0, 7, 0])
    );
  });
});
