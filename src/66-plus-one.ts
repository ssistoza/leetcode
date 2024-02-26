const _plusOne = {
  v1(nums: number[]): number[] {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] < 9) {
        nums[i]++;
        return nums;
      }

      nums[i] = 0;
    }

    nums.unshift(1);
    return nums;
  },
  v2(nums: number[]): number[] {
    const str = nums.join('');
    const num = Number(str) + 1;
    return num.toString().split('').map(Number);
  },
};

export const plusOne = Object.entries(_plusOne);
export default {
  fns: plusOne,
  testcase: [[4, 3, 2, 1]],
};
