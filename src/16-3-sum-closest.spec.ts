import { describe, expect, test } from 'vitest';
import { threeSumClosest } from './16-3-sum-closest.js';

describe.each(threeSumClosest)('16. 3Sum Closest %s', (_, fn) => {
  test('nums = [-1, 2, 1, -4], target = 1', () => {
    expect(fn([-1, 2, 1, -4], 1)).toBe(2);
  });

  test('nums = [1, 1, -1, 0], target = -1', () => {
    expect(fn([1, 1, -1, 0], -1)).toBe(0);
  });

  test('nums = [4,0,5,-5,3,3,0,-4,-5], target = -2', () => {
    expect(fn([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)).toBe(-2);
  });
});
