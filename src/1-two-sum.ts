const _twoSum = {
  v1(nums: number[], target: number): number[] {
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
  },
};

export const twoSum = Object.entries(_twoSum);
export default {
  fns: twoSum,
  testcase: [[2, 7, 11, 15], 9],
};
