import { expect, describe } from 'vitest';

import { test } from '~lib/vitest.js';
import { ListNode, addTwoNumbers } from './2-add-two-numbers.js';

describe.each(addTwoNumbers)('2. addTwoNumbers %s', (_, fn) => {
  test('l1 = [2,4,3], l2 = [5,6,4]', () => {
    expect(
      fn(ListNode.construct([2, 4, 3]), ListNode.construct([5, 6, 4]))
    ).toEqual(ListNode.construct([7, 0, 8]));
  });

  test('l1 = [0], l2 = [0]', () => {
    expect(fn(ListNode.construct([0]), ListNode.construct([0]))).toEqual(
      ListNode.construct([0])
    );
  });

  test('l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]', () => {
    expect(
      fn(
        ListNode.construct([9, 9, 9, 9, 9, 9, 9]),
        ListNode.construct([9, 9, 9, 9])
      )
    ).toEqual(ListNode.construct([8, 9, 9, 9, 0, 0, 0, 1]));
  });
});
