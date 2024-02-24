import { expect, describe } from 'vitest';
import { twoSum } from './two-sum.js';
import { measure } from '~lib/vitest.js';

describe.each(twoSum)('twoSum %s', (_, fn) => {
  measure('nums = [2,7,11,15], target = 9', () => {
    expect(fn([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  measure('nums = [3,2,4], target = 6', () => {
    expect(fn([3, 2, 4], 6)).toEqual([1, 2]);
  });

  measure('nums = [3,3], target = 6', () => {
    expect(fn([3, 3], 6)).toEqual([0, 1]);
  });
});
