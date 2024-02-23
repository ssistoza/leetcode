import { test, expect, describe } from 'vitest';

function twoSum(nums: number[], target: number): number[] {
  const indexes = [];

  let first = 0;
  let second = 1;
  let maxLength = nums.length;

  while (true) {
    const sum = nums[first]! + nums[second]!;

    if (sum === target) {
      indexes.push(first, second);
      break;
    }

    if (second === maxLength - 1) {
      first++;
      second = -1;
    }

    second++;

    if (first === second) {
      second++;
    }
  }

  return indexes;
}

describe('twoSum', () => {
  test('nums = [2,7,11,15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('nums = [3,2,4], target = 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('nums = [3,3], target = 6', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
