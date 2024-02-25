import { describe, expect } from 'vitest';
import { searchInsert } from './35-search-insert-position.js';
import { test } from '~lib/vitest.js';

describe.each(searchInsert)('35. searchInsert %s', (_, fn) => {
  test('nums = [1,3,5,6], target = 5', () => {
    expect(fn([1, 3, 5, 6], 5)).toBe(2);
  });

  test('nums = [1,3,5,6], target = 2', () => {
    expect(fn([1, 3, 5, 6], 2)).toBe(1);
  });

  test('nums = [1,3,5,6], target = 7', () => {
    expect(fn([1, 3, 5, 6], 7)).toBe(4);
  });
});
