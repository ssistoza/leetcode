import { describe, expect } from 'vitest';
import { plusOne } from './66-plus-one.js';
import { test } from '~lib/vitest.js';

describe.each(plusOne)('66. Plus One %s', (_, fn) => {
  test('nums = [1,2,3]', () => {
    expect(fn([1, 2, 3])).toEqual([1, 2, 4]);
  });

  test('nums = [4,3,2,1]', () => {
    expect(fn([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });

  test('nums = [9]', () => {
    expect(fn([9])).toEqual([1, 0]);
  });
});
